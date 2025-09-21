"use client";
import React, { useMemo, useRef } from "react";
import { cn } from "../../lib/utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}

export const CanvasRevealEffect: React.FC<CanvasRevealEffectProps> = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <DotMatrix
        colors={colors}
        dotSize={dotSize}
        opacities={opacities}
        shader={`
          float animation_speed_factor = ${animationSpeed.toFixed(1)};
          float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
          opacity *= step(intro_offset, u_time * animation_speed_factor);
          opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
        `}
        center={["x", "y"]}
      />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  const uniforms = useMemo(() => {
    let colorsArray: number[][] = Array(6).fill(colors[0]);
    if (colors.length === 2) {
      colorsArray = [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]];
    } else if (colors.length === 3) {
      colorsArray = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
    }

    return {
      u_colors: { value: colorsArray.map(c => c.map(v => v / 255)), type: "uniform3fv" },
      u_opacities: { value: opacities, type: "uniform1fv" },
      u_total_size: { value: totalSize, type: "uniform1f" },
      u_dot_size: { value: dotSize, type: "uniform1f" },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return <Shader source={generateShader(shader, center)} uniforms={uniforms} />;
};

const generateShader = (customShader: string, center: ("x" | "y")[]) => `
precision mediump float;
in vec2 fragCoord;
uniform float u_time;
uniform float u_opacities[10];
uniform vec3 u_colors[6];
uniform float u_total_size;
uniform float u_dot_size;
uniform vec2 u_resolution;
out vec4 fragColor;

float PHI = 1.61803398874989484820459;
float random(vec2 xy) {
  return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
}

void main() {
  vec2 st = fragCoord.xy;
  ${center.includes("x") ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));" : ""}
  ${center.includes("y") ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));" : ""}
  float opacity = step(0.0, st.x) * step(0.0, st.y);
  vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
  float show_offset = random(st2);
  float rand = random(st2 * floor((u_time / 5.0) + show_offset + 5.0) + 1.0);
  opacity *= u_opacities[int(rand * 10.0)];
  opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
  opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
  vec3 color = u_colors[int(show_offset * 6.0)];
  ${customShader}
  fragColor = vec4(color, opacity);
  fragColor.rgb *= fragColor.a;
}
`;

interface Uniforms {
  [key: string]: { value: number[] | number[][] | number; type: string };
}

interface ShaderProps {
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}

const Shader: React.FC<ShaderProps> = ({ source, uniforms, maxFps = 60 }) => (
  <Canvas className="absolute inset-0 h-full w-full">
    <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
  </Canvas>
);

const ShaderMaterial: React.FC<{ source: string; uniforms: Uniforms; maxFps?: number }> = ({
  source,
  uniforms,
  maxFps = 60,
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  let lastFrameTime = 0;

  const preparedUniforms = useMemo(() => {
    const obj: Record<string, THREE.IUniform> = {};

    for (const key in uniforms) {
      const uniform = uniforms[key];
      switch (uniform.type) {
        case "uniform1f":
        case "uniform1fv":
          obj[key] = { value: uniform.value };
          break;
        case "uniform3fv":
          obj[key] = {
            value: (uniform.value as number[][]).map((v) => new THREE.Vector3(...v)),
          };
          break;
        default:
          throw new Error(`Unsupported uniform type: ${uniform.type}`);
      }
    }

    obj.u_time = { value: 0 };
    obj.u_resolution = { value: new THREE.Vector2(size.width * 2, size.height * 2) };
    return obj;
  }, [uniforms, size.width, size.height]);

  useFrame(({ clock }) => {
    const mesh = ref.current;
    if (!mesh) return;

    const elapsed = clock.getElapsedTime();
    if (elapsed - lastFrameTime < 1 / maxFps) return;
    lastFrameTime = elapsed;

    const material = mesh.material as THREE.ShaderMaterial;
    material.uniforms.u_time.value = elapsed;
  });

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
      precision mediump float;
      in vec3 position;
      out vec2 fragCoord;
      uniform vec2 u_resolution;
      void main(){
        gl_Position = vec4(position.xy, 0.0, 1.0);
        fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
        fragCoord.y = u_resolution.y - fragCoord.y;
      }
      `,
      fragmentShader: source,
      uniforms: preparedUniforms,
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [source, preparedUniforms]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};



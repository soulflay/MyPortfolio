"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <>
      <section className="pt-40">
        <h1 className="heading text-center text-4xl font-semibold">
            My <span className="text-blue-500">Approach</span> 
        </h1>
        <div className="flex flex-col lg:gap-6 lg:flex-row my-15 cursor-pointer items-center justify-center gap-10 px-8">
            <Card 
            title="Vision & Strategy" 
            icon={<AceternityIcon order='Phase 1'/>} 
            description="Before I dive in, I need to know what we're actually solving. I ask a lot of questions, break the thing down, and look at it from different angles. Whether it’s a coding project, a data dashboard, or a business issue — I always map out the big picture and the small details.
            Tools: Notion, whiteboards, my brain, some late-night thinking."
            >
            <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
                 colors={[
                  [125, 211, 252]

                ]}
                dotSize={2}
            />
            </Card>

            <Card title="Design & Development" 
            icon={<AceternityIcon order='Phase 2'/>}
            description="Once I know what needs to be done, I go hands-on. I start building — writing code, setting up systems, designing flows, fixing logic. I’m all about clean structure and performance — 
            whether I’m using React, Python, SQL, or figuring out APIs.
            I keep it flexible, modular, and scalable — always thinking about who’s using it and how it can grow."
            >
            <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-red-700"
                 colors={[
                  [125, 211, 252]

                ]}
                dotSize={2}
            />
            </Card>

            <Card 
            title="Evaluate & Elevate"
            icon={<AceternityIcon order='Phase 3'/>}
            description="After building, I’m in test mode: What’s broken? What can be cleaner? What’s slow? I take feedback seriously and tweak things until they feel right. I also look at how the solution performs in the real world and think about version 2 before version 1 is even cold.
            Sometimes I obsess a bit, but that’s how I catch the little things that make big differences."
            >
            <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-purple-800"
                colors={[[125, 211, 252]]}
                dotSize={2}
            />
            </Card>

        </div>
      </section>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;         
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full  mx-3 p-4 lg:h-[28rem] relative rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {icon}
        </div>
        <h2 className="dark:text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card: group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-semi-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 ">
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: { order: string }) => {
  return (
    <div>
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-1 text-[15px] font-medium backdrop-blur-3xl">
        {order}
      </span>

    </button>

   </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach
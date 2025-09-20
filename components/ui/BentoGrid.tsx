'use client'

import { cn } from "../../lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "../../data/confetti.json"
import { IoCopyOutline } from "react-icons/io5";
import ShimmerButton from "./ShimmerButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    // <div
    //   className={cn(
    //     "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
    //     className,
    //   )}
    // >
    //   {children}
    // </div>

    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-7 lg:gap-8 mx-auto px-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  id,
  imgclassName,
  titleClassName,
  spareImg,
  

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgclassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
      navigator.clipboard.writeText('ayanniyihameed@gmail.com')
      setCopied(true)
    }

  return (
    <div
      // className={cn(
        // "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        // className,

         className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl cursor-pointer transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}

      style={{
        // background: '#100817',
        // backgroundColor: 'linear-gradient(90deg,rgba(16, 8, 23, 1) 0%, rgba(18, 32, 61, 1) 100%, rgba(88, 83, 237, 1) 100%)'
        background: '#090921',
        backgroundColor: 'linear-gradient(90deg,rgba(9, 9, 33, 1) 0%, rgba(18, 32, 61, 1) 100%, rgba(29, 29, 64, 1) 100%)'
      }}

    >
    <div className={`${id === 6 && 'flex justify-center'} h-full` }>
      <div className="w-full h-full absolute">
        {img && (
          <img 
            src={img}
            alt={img}
            className={cn(imgclassName, 'object-cover', 'object-center'
            )}
          
          />
        )}

      </div>

      <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
        {spareImg && (
           <img 
            src={spareImg}
            alt={spareImg}
            className={'object-cover object-center w-full h-full'}
          />
        )}

      </div>

      {id === 6 && (
        <BackgroundGradientAnimation>
       
        </BackgroundGradientAnimation>
      )}

      <div className={cn(
        titleClassName, 
        'group-hover/bento:translate-x-2 transition:duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
        <div className="font-extralight text-[#ffffff]
        text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>

        <div className={cn(
          "mt-1 mb-2 font-semibold text-lg lg:text-1xl max-w-96 z-10",
          id === 6 
            ? "font-extralight text-[#ffffff] text-[16px]" 
            : "bg-gradient-to-r from-purple-500 via-blue-400 to-blue-500 bg-clip-text text-transparent"
        )}>
          {title}
        </div>


      {id === 2 && <GlobeDemo /> }


      {id === 3 && (
        <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2 text-black">
          <div className="flex flex-col gap-3 text-[10px] lg:gap-5">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
            {
              ['Javascript', 'Typescript', 'python'].map((item) => (
                <span key={item} className="py-2 lg:py4 lg:px3 px-3 text-[12px] opacity-50
                lg:opacity-80 rounded-lg text-center bg-[#ba7ecc]">
                  {item}
                </span>
              ))
            }
          </div>

          <div className="flex flex-col gap-3 text-[10px] lg:gap-4">
            {
              ['Django', 'Next.js', 'React.js'].map((item) => (
                <span key={item} className="py-2 lg:py4 lg:px3 px-3 text-[12px] opacity-50
                lg:opacity-80 rounded-lg text-center bg-[#7e86cc]">
                  {item}
                </span>
              ))
            }
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
          </div>

        </div>
      )}

      {id === 6 && (
        <div className="mt-5 relative ">
          <div className={`absolute -bottom-5 right-0`}>
          <Lottie options={{
            loop: copied,
            autoplay: copied,
            animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            }
          }}
          
          />
          </div>
        <ShimmerButton 
              title={copied ? "Email copied" : 'Copy my email'}
              icon={<IoCopyOutline />}
              position='left'
              otherClasses="!bg-[#161a31] text-[13px]"
              handleClick={handleCopy} 
            />
        </div>
      )}

    </div>

    </div>
  </div>
  );
};



// Also install this npm i --save-dev @types/react-lottie

// import { cn } from "../../lib/utils";



// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
//         "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   id,
//   title,
//   description,
//   //   remove unecessary things here
//   img,
//   imgClassName,
//   titleClassName,
//   spareImg,
// }: {
//   className?: string;
//   id: number;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   img?: string;
//   imgClassName?: string;
//   titleClassName?: string;
//   spareImg?: string;
// }) => {
//   const leftLists = ["ReactJS", "Express", "Typescript"];
//   const rightLists = ["VueJS", "NuxtJS", "GraphQL"];






//   return (
//     <div
//       className={cn(
//         // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
//         "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
//         className
//       )}
//       style={{
//         //   add these two
//         //   you can generate the color from here https://cssgradient.io/
//         background: "rgb(4,7,29)",
//         backgroundColor:
//           "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//       }}
//     >
//       {/* add img divs */}
//       <div className={`${id === 6 && "flex justify-center"} h-full`}>
//         <div className="w-full h-full absolute">
//           {img && (
//             <img
//               src={img}
//               alt={img}
//               className={cn(imgClassName, "object-cover object-center ")}
//             />
//           )}
//         </div>
//         <div
//           className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
//             } `}
//         >
//           {spareImg && (
//             <img
//               src={spareImg}
//               alt={spareImg}
//               //   width={220}
//               className="object-cover object-center w-full h-full"
//             />
//           )}
//         </div>
      

//         <div
//           className={cn(
//             titleClassName,
//             "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
//           )}
//         >
//           {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
//           <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
//             {description}
//           </div>
//           {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
//           {/* remove mb-2 mt-2 */}
//           <div
//             className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
//           >
//             {title}
//           </div>

//           {/* for the github 3d globe */}

//           {/* Tech stack list div */}
//           {id === 3 && (
//             <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
//               {/* tech stack lists */}
//               <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
//                 {leftLists.map((item, i) => (
//                   <span
//                     key={i}
//                     className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
//                     lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//                 <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
//               </div>
//               <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
//                 <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
//                 {rightLists.map((item, i) => (
//                   <span
//                     key={i}
//                     className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
//                     lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//           {id === 6 && (
//             <div className="mt-5 relative">
//               {/* button border magic from tailwind css buttons  */}
//               {/* add rounded-md h-8 md:h-8, remove rounded-full */}
//               {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
//               {/* add handleCopy() for the copy the text */}
             
//                 {/* <img src="/confetti.gif" alt="confetti" /> */}
//               </div>

              
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
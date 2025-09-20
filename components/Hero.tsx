import React from 'react'
import { Spotlight } from './ui/spotlight-new'
import { cn } from '../lib/utils'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import { TiDownload, TiDownloadOutline, TiLocationArrow } from 'react-icons/ti'


const Hero = () => {
  return (
    <div className='pb-20 pt-25'>
      <div>
          <Spotlight />
      </div>

      <div className="h-screen w-full flex items-center 
      justify-center bg-white dark:bg-black-100 absolute  
      top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:70px_70px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.2)_2px,transparent_2px),linear-gradient(to_bottom,rgba(38,38,38,0.2)_2px,transparent_2px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"></p>
      </div>
      
      <div className='flex justify-center relative mb-40 my-12 z-10 '>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className="uppercase  tracking-widest text-center text-[10px] max-w-80">
            Dynamic Web Apps with Next.js
          </h2>

          <TextGenerateEffect className="font-semibold text-center md:text-4xl lg:text-4xl
          dark:text-white text-black leading-snug tracking-[1.5px]"
          words="Hi, I'm HAMEED AYANNIYI, a Frontend Developer based in London." />
          
        
        
          <p className='text-white text-center md:tracking-wide  mb-3 text-[16px]'>I specialize in building modern interfaces that not only look great but also create real business impact.</p>
          <div className='flex gap-5'>
            <a href="#projects">
              <ShimmerButton 
                title='Show my work'
                icon={<TiLocationArrow className='text-xl text-white'/>}
                position={'right'}  
                otherClasses='text-[15px]' /> 
            </a>
            <a href="Hameed_Ayanniyi_CV.pdf" target='_blank' rel="noopener noreferrer">
              <ShimmerButton 
                title='Download CV'
                icon={<TiDownload className='text-xl text-white'/>}
                position={'right'}  
                otherClasses='text-[15px]' /> 
            </a>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
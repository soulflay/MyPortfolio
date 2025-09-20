import React from 'react'
import { projects } from '../data'
import { PinContainer } from './ui/3dPin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='pt-60' id='projects'>
        <h1 className="heading text-white text-center text-4xl font-semibold">
            A small selection of {' '}
            <span className=' text-blue-500'>Recent Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-2 gap-x-24 mt-7">
            {projects.map(({ id, title, des, img, iconLists, link}
            ) => 
                <div key={id} className='lg:min-h-[32.5rem] flex items-center 
                    sm:h-[40rem] h-[32rem] justify-center sm:w-[470px] w-[80vw]'>
                    <PinContainer title={link} href={link} >
                        <div className='relative flex items-center justify-center sm:w-[420px] w-[80vw] overflow-hidden
                         h-[50vh] sm:h-[46vh] lg:h[30vh] mb-11'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img src={img} 
                            alt={title}
                            className='absolute bottom-3' />
                        </div>

                        <h1 className='font-semibold lg:text-[22px] md:text-xl bg-gradient-to-r from-purple-500 via-blue-400 to-blue-500 bg-clip-text text-transparent text-base line-clamp-1'>
                            {title}
                        </h1>

                        <p className='lg:text-[14px] lg:font-normal font-light text-sm line-clamp-5'>
                            {des}
                        </p>

                        <div className='flex justify-between items-center mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => 
                                <div key={icon} className='border border-white/[0.2] rounded-full bg-black
                                lg:w-9 lg:h-9 h-8 w-8 flex justify-center items-center'
                                style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                    <img src={icon} alt={icon} className='p-2' />
                                </div>
                                )}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='flex text-[15px] text-sm md:text-sm text-purple-300'>
                                    Take a Look
                                </p>
                                <FaLocationArrow className='ms-3 text-blue-300'/>
                            </div>

                        </div>
                            
                    </PinContainer>
                </div>
            
            )}
        </div>

    </div>
  )
}

export default RecentProjects
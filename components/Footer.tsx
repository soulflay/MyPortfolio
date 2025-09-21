import React from 'react'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '../data'

const Footer = () => {
  return (
    <footer className='w-full pt-40 pb-10 scroll-mt-20' id='contact'>
        <div className='flex flex-col text-center items-center'>
            <h1 className='text-3xl lg:max-w-[45vw]'>
                Ready to take <span className='text-blue-500'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                reach out to me today and let&apos;s discuss how we can achieve your goals. 
            </p>
            <a href="mailto:ayanniyihameed@gmail.com">
                <ShimmerButton 
                    title="get in touch"
                    icon = {<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light mb-4 md:mb-0'>
                copyright © 2025 Hameed 
            </p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center
                    items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75
                    bg-black-200 border rounded-lg border-black-300'>
                        <a href={profile.link} target='_blank' rel="noopener noreferrer">
                            <img src={profile.img}
                            width={20} height={20}></img>
                        </a>
                    </div>
                ))}

            </div>
        </div>

    </footer>
)
}

export default Footer
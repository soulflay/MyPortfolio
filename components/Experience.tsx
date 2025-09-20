import React from 'react'
import { workExperience } from '../data'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div className='pt-40 scroll-mt-28' id='testimonials'>
        <h1 className="heading text-white text-center text-4xl font-semibold ">
            My 
            <span className=' text-blue-500'> Work Experience</span>
        </h1>
        <div className="w-full mt-15 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map((card) => (
                
                <Button 
                duration={Math.floor(Math.random() * 10000 + 1000)}
                key={card.id}
                className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <img src={card.thumbnail} alt={card.thumbnail} 
                    className='lg:w-20 md:w-20 w-16'/>

                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl bg-gradient-to-r from-purple-500 via-blue-400 to-blue-500 bg-clip-text text-transparent md:text-[22px] font-bold'>
                            {card.title}
                        </h1>

                        <p className='text-start font-semibold text-white-100 mt-3'> 
                            {card.desc}
                        </p>

                    </div>
                </div>
                </Button>

            ))}
        </div>
    </div>
)}

export default Experience
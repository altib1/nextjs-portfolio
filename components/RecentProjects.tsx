'use client';

import { projects } from '@/data'
import React, { useEffect, useState } from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton';

const RecentProjects = ({
        displayNumber, title, spanTitle, buttonShowMore
    }: {
        displayNumber: number,
        title: string,
        spanTitle: string,
        buttonShowMore: boolean
    }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            {title} {' '} 
            <span className='text-sky-300'> {spanTitle} </span>
        </h1>
        <div className='justify-center flex flex-wrap items-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}, index) => (
                index < displayNumber && (
               
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer 
                    title={link}
                    href={link}
                    >
                        <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] '>
                                <img src="/bg.png" alt='bg-img' />
                            </div>
                            <img src={img} alt={title} className='z-10 absolut bottom-0' />
                        </div>
                        <h1 className='font-bold text-base lg:text2xl md:text-xl line-clamp-1'>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center '>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                    style={{
                                        transform: `translateX(-${5 * index * 2}px)`}}
                                    >
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl mf:text-xs text-sm text-sky-300'>Check Live site</p>
                                <FaLocationArrow className='ms-3'
                                color='#CBACF9'
                                />

                            </div>
                        </div>
                    </PinContainer>
               </div> 
                )
            ))}
            {buttonShowMore && (
                <div className='w-full text-center items-center justify-center text-base sm:text-sm'>
                    <h3 className='heading'>You want to see more projects?</h3>
                    <a href="/projects">
                    <MagicButton 
                    title='Show More'
                    icon={<FaLocationArrow />}
                    />  
                    </a>
                </div>
            )}
        </div>
    </div>
  )
}

export default RecentProjects

function setMounted(arg0: boolean) {
    throw new Error('Function not implemented.')
}

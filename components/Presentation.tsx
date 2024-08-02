import React from 'react'
import Image from "next/image";
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Presentation = () => {
  return (
    <div className='py-10 relative' id='projects'>
        <h1 className='heading text-center items-center justify-center'>
            Let me present my self {' '} 
            <span className='text-sky-300'> quickly </span>
        </h1>
        <div className='flex flex-col sm:flex-row w-full justify-center'>
            <div className='justify-center flex flex-wrap flex-col xl:flex-row items-center p-4 gap-y-8 mt-10'>
                <p className='font-normal text-lg lg:text-xl md:text-base sm:text-sm xs:text-sm'>
                I'm Alti Balla, a 26 years old full stack developer with a passion for building beautiful and functional websites.
                    I have a strong foundation in web development and I am always looking to learn new technologies.
                    I have working in different projects profesionally and personally. My projects are mainly built 
                    with Symfony, Sylius, React js, Next js and other modern technologies.
                </p>
            </div>
            <div className='justify-center flex flex-wrap flex-col xl:flex-row items-center p-4 gap-x-24 gap-y-8 mt-10'>
                <Image
                      src="/alti.png"
                      alt="Alti Profile Picture"
                      height="500"
                      width="500"
                      className="rounded-lg mb-10 object-cover"
                />
            </div>
        </div>
        <div className='flex justify-center'>
            <a href="/about">
                <MagicButton 
                title='You want to know more about me ?'
                icon={<FaLocationArrow />}
                />  
            </a>
        </div>
    </div>
  )
}

export default Presentation
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Home");
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight fill='white' className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' />
            <Spotlight fill='purple' className='top-10 left-full  h-[80vh] w-[50vw]' />
            <Spotlight fill='blue' className='top-28 left-80 h-[80vh] w-[50vw]' />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 lef-0">
           <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-center text-xs text-blue-100 max-w-80  '>
              Full stack web developper
            </h2>

            <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words={t("hero-title")}
            />

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              {t("hero-subtitle")}
            </p>

            <a href='/projects'>
                <MagicButton 
                  title={t("hero-button")}
                  icon={ <FaLocationArrow className='' /> }
                  position='right'
                />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Hero
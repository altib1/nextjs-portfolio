import React from 'react'
import Image from "next/image";
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { useTranslations } from "next-intl";

const Presentation = () => {
    const t = useTranslations("Home");
  return (
    <div className='py-10 relative' id='projects'>
        <h1 className='heading text-center items-center justify-center'>
            {t('presentation-title-pt1')} {' '} 
            <span className='text-sky-300'> {t('presentation-title-pt2')} </span>
        </h1>
        <div className='flex flex-col sm:flex-row w-full justify-center'>
            <div className='justify-center flex flex-wrap flex-col xl:flex-row items-center p-4 gap-y-8 mt-10'>
                <p className='font-normal text-lg lg:text-xl md:text-base sm:text-sm xs:text-sm'>
                    {t('presentation-description')}
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
                title={t('presentation-button')}
                icon={<FaLocationArrow />}
                />  
            </a>
        </div>
    </div>
  )
}

export default Presentation
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItemsEn } from '@/data/en.index'
import { gridItemsFr } from '@/data/fr.index'
import { gridItemsAl } from '@/data/al.index'
import { useLocale } from "next-intl";


const Grid = () => {
    const locale = useLocale();
    const gridItems = locale === "en" ? gridItemsEn : locale === "fr" ? gridItemsFr : gridItemsAl;
    
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                      <BentoGridItem 
                      id={id}
                      key={id}
                      title={title}
                      description={description}
                      className={className}
                      img={img}
                      imgClassName={imgClassName}
                      titleClassName={titleClassName}
                      spareImg={spareImg}
                      />
                ))
            }
        </BentoGrid>
    </section>
  )
}

export default Grid
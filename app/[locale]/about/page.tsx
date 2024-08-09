import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/TracingAnimation";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { useTranslations, useLocale } from "next-intl";
import { navItemsEn } from "@/data/en.index";
import { navItemsFr } from "@/data/fr.index";
import { navItemsAl } from "@/data/al.index";

export default function About() {
  const locale = useLocale();
  const navItems = locale === "en" ? navItemsEn : locale === "fr" ? navItemsFr : navItemsAl;
  
  const f = useTranslations("Footer");
  const t = useTranslations("About");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <TracingBeam className="px-6 my-10">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {/* Profile Section */}
            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
                {t('menu-introduction')}
              </h2>
              <TextGenerateEffect 
            className='text-left text-[40px] md:text-5xl lg:text-6xl my-5'
            words={t("title")}
            />
              <div className=" prose prose-sm dark:prose-invert text-base lg:text-xl sm:text-sm my-4">
                <Image
                  src="/alti.png"
                  alt="Alti Profile Picture"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover"
                />
                {t('description-pt1')} <strong className="text-sky-300">{t('description-pt2')}</strong>{t('description-pt3')}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
              {t('menu-my-journey')}
              </h2>
              <Image
                  src="/my-journey.jpg"
                  alt="my-journey"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover"
                />
              <p className="text-xl mb-4">
              {t('journey-pt1')}
              </p>
              <div className="text-sm prose prose-sm dark:prose-invert">
                <p className="text-base lg:text-xl sm:text-sm my-4">
                {t('journey-pt2-1')}<strong className="text-sky-300">{t('journey-pt2-2')}</strong> {t('journey-pt2-3')}
                </p>
                <p className="text-base lg:text-xl sm:text-sm my-4">
                {t('journey-pt3-1')}<strong className="text-sky-300">{t('journey-pt3-2')}</strong> {t('journey-pt3-3')}
                </p>
                <p className="text-base lg:text-xl sm:text-sm my-4" >
                {t('journey-pt4-1')}<strong className="text-sky-300" >{t('journey-pt4-2')}</strong> {t('journey-pt4-3')} <strong className="text-sky-300">{t('journey-pt4-4')}</strong> {t('journey-pt4-5')}
                </p>
                <p className="text-base lg:text-xl sm:text-sm my-4">
                {t('journey-pt5')}
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
              {t('menu-my-skills-and-expertise')}
              </h2>
              <ul className="list-disc pl-5 text-lg leading-7">
                <li>{t('skills-li1-1')}<strong className="text-sky-300">{t('skills-li1-2')}</strong></li>
                <li>{t('skills-li2-1')}<strong className="text-sky-300">{t('skills-li2-2')}</strong></li>
                <li>{t('skills-li3-1')}<strong className="text-sky-300">{t('skills-li3-2')}</strong></li>
                <li>{t('skills-li4-1')}<strong className="text-sky-300">{t('skills-li4-2')}</strong></li>
                <li>{t('skills-li5-1')}</li>
                <li>{t('skills-li6-1')}<strong className="text-sky-300">{t('skills-li6-2')}</strong></li>
                <li>{t('skills-li7-1')}<strong className="text-sky-300">{t('skills-li7-2')}</strong></li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
              {t('menu-languages')}
              </h2>
              <p className="text-xl mb-4">
              {t('languages-title')}
              </p>
              <div className="text-sm prose prose-sm dark:prose-invert">
                <p className="text-base lg:text-xl sm:text-sm my-4">
                  <strong className="text-sky-300">{t('languages-li1')}</strong> {t('languages-li1-1')} <br />
                  <strong className="text-sky-300">{t('languages-li2')}</strong> {t('languages-li2-1')}
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
              {t('menu-personal-interest')}
              </h2>
              <p className="text-xl mb-4">
              {t('personal-interests-title')}
              </p>
              <div className="text-sm prose prose-sm dark:prose-invert">
                <p className="text-base lg:text-xl sm:text-sm my-4">
                {t('personal-interests-description')}
                </p>
                <p className="text-base lg:text-xl sm:text-sm my-4 text-sky-300 font-bold">
                {t('personal-interests-description-2')}
                </p>
              </div>
            </div>
          </div>
        </TracingBeam>
        <Footer titlePt1 = {f('title-pt-1')} titlePt2 = {f('title-pt-2')} titlePt3 = {f('title-pt-3')}  subtitle={f('subtitle')} copyright = {f('copyright')} button = {f('button')} />
      </div>
    </main>
  );
}

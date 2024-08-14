import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/TracingAnimation";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { useTranslations, useLocale } from "next-intl";
import { navItemsEn, termsAndConditionsEn } from "@/data/en.index";
import { navItemsFr, termsAndConditionsFr } from "@/data/fr.index";
import { navItemsAl, termsAndConditionsAl } from "@/data/al.index";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Cgu() {
  const locale = useLocale();
  const navItems = locale === "en" ? navItemsEn : locale === "fr" ? navItemsFr : navItemsAl;
  const termsAndConditions = locale === "en" ? termsAndConditionsEn : locale === "fr" ? termsAndConditionsFr : termsAndConditionsAl;
  
  const f = useTranslations("Footer");
  const t = useTranslations("About");
  const l = useTranslations("SwitchLanguage");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <LanguageSwitcher cvButton = {l('cvButton')} />
        <section className="my-10">
        {termsAndConditions.map((terms) => (
          <div key={terms.id} className="my-40">
            <h1 className="text-3xl font-bold text-sky-300 mb-4">{terms.title}</h1>
            <p className="text-white-300 text-lg mb-4">{terms.description}</p>
            <p className="text-white-300 text-lg mb-4">{terms.description1}</p>
            <p className="text-white-300 text-lg mb-4">{terms.description2}</p>
            <p className="text-white-300 text-lg mb-4">{terms.description3}</p>
            <p className="text-white-300 text-lg mb-4">{terms.description4}</p>
            <p className="text-white-300 text-lg mb-4">{terms.description5}</p>
            <p className="text-white-300 text-lg mb-4">{terms.description6}</p>
            <p className="text-white-300 text-lg mb-4">{terms.description7}</p>
            <p className="text-white-300 text-lg mb-4">{terms.description8}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description9}</p> 
            <p className="text-white-300 text-lg mt-4">{terms.description10}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description11}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description12}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description13}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description14}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description15}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description16}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description17}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description18}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description19}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description20}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description21}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description22}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description23}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description24}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description25}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description26}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description27}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description28}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description29}</p>
            <p className="text-white-300 text-lg mt-4">{terms.description30}</p>
          </div>
        ))}
        </section>
        <Footer titlePt1 = {f('title-pt-1')} titlePt2 = {f('title-pt-2')} titlePt3 = {f('title-pt-3')}  subtitle={f('subtitle')} copyright = {f('copyright')} button = {f('button')} />
      </div>
    </main>
  );
}

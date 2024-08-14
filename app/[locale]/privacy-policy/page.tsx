import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/TracingAnimation";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { useTranslations, useLocale } from "next-intl";
import { navItemsEn, privacyPolicyEn } from "@/data/en.index";
import { navItemsFr, privacyPolicyFr } from "@/data/fr.index";
import { navItemsAl, privacyPolicyAl } from "@/data/al.index";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function PrivacyPolicy() {
  const locale = useLocale();
  const navItems = locale === "en" ? navItemsEn : locale === "fr" ? navItemsFr : navItemsAl;
  const privacyPolicy = locale === "en" ? privacyPolicyEn : locale === "fr" ? privacyPolicyFr : privacyPolicyAl;
  
  const f = useTranslations("Footer");
  const t = useTranslations("About");
  const l = useTranslations("SwitchLanguage");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <LanguageSwitcher cvButton = {l('cvButton')} />
        <section className="my-10">
          {privacyPolicy.map((policy) => (
            <div key={policy.id} className="my-40">
              <h1 className=" text-3xl font-bold text-sky-300 mb-4text-white-300 my-5">{policy.title}</h1>
              <p className="text-white-400 mt-4">{policy.description}</p>
              <p className="text-white-400 mt-4">{policy.description1}</p>
              <p className="text-white-400 mt-4">{policy.description2}</p>
              <p className="text-white-400 mt-4">{policy.description3}</p>
              <p className="text-white-400 mt-4">{policy.description4}</p>
              <p className="text-white-400 mt-4">{policy.description5}</p>
              <p className="text-white-400 mt-4">{policy.description6}</p>
              <p className="text-white-400 mt-4">{policy.description7}</p>
              <p className="text-white-400 mt-4">{policy.description8}</p>
            </div>
          ))}
        </section>
        <Footer titlePt1 = {f('title-pt-1')} titlePt2 = {f('title-pt-2')} titlePt3 = {f('title-pt-3')}  subtitle={f('subtitle')} copyright = {f('copyright')} button = {f('button')} />
      </div>
    </main>
  );
}

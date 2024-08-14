import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/TracingAnimation";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { useTranslations, useLocale } from "next-intl";
import { navItemsEn, LegalMentionsEn } from "@/data/en.index";
import { navItemsFr, LegalMentionsFr } from "@/data/fr.index";
import { navItemsAl, LegalMentionsAl } from "@/data/al.index";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function LegalMentions() {
  const locale = useLocale();
  const navItems = locale === "en" ? navItemsEn : locale === "fr" ? navItemsFr : navItemsAl;
  const mentionsLegales = locale === "en" ? LegalMentionsEn : locale === "fr" ? LegalMentionsFr : LegalMentionsAl;

  const f = useTranslations("Footer");
  const t = useTranslations("About");
  const l = useTranslations("SwitchLanguage");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <LanguageSwitcher cvButton = {l('cvButton')} />
        <section className="my-10">
        {mentionsLegales.map((mention) => (
            <div key={mention.id} className="my-40">
              <h1 className="text-3xl font-bold text-sky-300 mb-4">{mention.title}</h1>
              <h2 className="text-2xl font-semibold text-sky-300 mt-6 mb-2">{mention.editor}</h2>
              <p className="text-white-300 text-lg mb-4">{mention.editorDescription}</p>
              
              <h2 className="text-2xl font-semibold text-sky-300 mt-6 mb-2">{mention.host}</h2>
              <p className="text-white-300 text-lg mb-4">{mention.hostDescription}</p>
              
              <h2 className="text-2xl font-semibold text-sky-300 mt-6 mb-2">{mention.access}</h2>
              <p className="text-white-300 text-lg mb-4">{mention.accessDescription}</p>
              
              <h2 className="text-2xl font-semibold text-sky-300 mt-6 mb-2">{mention.personalData}</h2>
              <p className="text-white-300 text-lg mb-4">{mention.personalDataDescription}</p>
              
              <h2 className="text-2xl font-semibold text-sky-300 mt-6 mb-2">{mention.prohibition}</h2>
              <p className="text-white-300 text-lg">{mention.prohibitionDescription}</p>
            </div>
          ))}
        </section>
        <Footer titlePt1 = {f('title-pt-1')} titlePt2 = {f('title-pt-2')} titlePt3 = {f('title-pt-3')}  subtitle={f('subtitle')} copyright = {f('copyright')} button = {f('button')} />
      </div>
    </main>
  );
}

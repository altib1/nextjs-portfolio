import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { useTranslations, useLocale } from "next-intl";
import { navItemsEn } from "@/data/en.index";
import { navItemsFr } from "@/data/fr.index";
import { navItemsAl } from "@/data/al.index";
import LanguageSwitcher from "@/components/LanguageSwitcher";


export default function Home() {
  const locale = useLocale();
  const navItems = locale === "en" ? navItemsEn : locale === "fr" ? navItemsFr : navItemsAl;
  
  const t = useTranslations("Home");
  const f = useTranslations("Footer");
  const l = useTranslations("SwitchLanguage");
  return (
    <main className="relative bg-black-100 flex justify-center items-center 
    flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <LanguageSwitcher cvButton = {l('cvButton')} />
        <Hero />
        <Presentation />
        <RecentProjects displayNumber={4} title={t('projects-home-pt1')} spanTitle={t('projects-home-pt2')} checkLiveSite = {t('recent-projects-check-live')} button = {t('recent-projects-button')} question = {t('recent-projects-question')} buttonShowMore={true} />
        <Experience />
        <Footer titlePt1 = {f('title-pt-1')} titlePt2 = {f('title-pt-2')} titlePt3 = {f('title-pt-3')}  subtitle={f('subtitle')} copyright = {f('copyright')} button = {f('button')} />
      </div>
    </main>
  );
}

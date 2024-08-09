import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { useTranslations, useLocale } from "next-intl";
import { navItemsEn } from "@/data/en.index";
import { navItemsFr } from "@/data/fr.index";
import { navItemsAl } from "@/data/al.index";

export default function Projects() {
  const locale = useLocale();
  const navItems = locale === "en" ? navItemsEn : locale === "fr" ? navItemsFr : navItemsAl;
  
  const t = useTranslations("Projects");
  const f = useTranslations("Footer");
  return (
    <main className="relative bg-black-100 flex justify-center items-center 
    flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <RecentProjects displayNumber={6} title={t('title')} spanTitle={t('span-title')} checkLiveSite = {t('check-live-website')} button = {t('button')} question = {t('question')} buttonShowMore={false} />
        <Footer titlePt1 = {f('title-pt-1')} titlePt2 = {f('title-pt-2')} titlePt3 = {f('title-pt-3')}  subtitle={f('subtitle')} copyright = {f('copyright')} button = {f('button')} />
      </div>
    </main>
  );
}
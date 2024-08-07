import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  const f = useTranslations("Footer");
  return (
    <main className="relative bg-black-100 flex justify-center items-center 
    flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Presentation />
        <RecentProjects displayNumber={4} title={t('projects-home-pt1')} spanTitle={t('projects-home-pt2')} buttonShowMore={true} />
        <Experience />
        <Footer titlePt1 = {f('title-pt-1')} titlePt2 = {f('title-pt-2')} titlePt3 = {f('title-pt-3')}  subtitle={f('subtitle')} copyright = {f('copyright')} button = {f('button')} />
      </div>
    </main>
  );
}

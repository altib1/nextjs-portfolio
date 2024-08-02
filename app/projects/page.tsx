import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Projects() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center 
    flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <RecentProjects displayNumber={6} title="Here's a list of all the projects" spanTitle=" all the projects" buttonShowMore={false} />
        <Footer />
      </div>
    </main>
  );
}
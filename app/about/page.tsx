import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItemsAboutPage } from "@/data";

export default function About() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto px-5 sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full p-5 md:p-0">
        {/* Floating Navigation Component */}
        <FloatingNav navItems={navItemsAboutPage}/>

        {/* Main Content */}
        <div className="flex flex-col items-center text-white py-10 space-y-10">
          {/* Profile Image */}
          <img src="/alti.png" alt="Alti Profile Picture" className="w-40 h-auto rounded-full mb-6 shadow-lg" />

          {/* Introduction */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Hello it's me again!</h1>
            <p className="text-lg">
              I'm a Full Stack Developer with over 3 years of professional experience, specializing in creating robust and scalable web applications using React, Symfony, and PHP. 
              Based in Angers, France, I’m passionate about web development and continuous improvement.
            </p>
          </div>

          {/* Professional Journey */}
          <section className="w-full max-w-4xl space-y-4">
            <h2 className="text-2xl font-semibold">My Journey</h2>
            <p className="text-lg leading-7">
              I began my journey in web development with a BTS in <strong>Services Informatiques aux Organisations (Option Solutions Logicielles et Applications Métiers)</strong> from Lycée Carcouët, Nantes. 
              Here, I gained foundational skills in HTML, CSS, PHP, and C#, and completed two internships: one at Lycée La Colinière, Nantes, where I developed a web application, and another at Ateliers Perrault, where I created a Windows application.
            </p>
            <p className="text-lg leading-7">
              I continued my studies with a <strong>Licence Professionnelle DIWA</strong> at Université de Le Mans (IUT de Laval), focusing on web application development and integration. During this period, I started my first work-study program as a web developer at Easycom, where I gained significant experience in Symfony, Sylius, and React.js.
            </p>
            <p className="text-lg leading-7">
              To further enhance my skills, I pursued a <strong>Master’s degree in Full Stack Web Development</strong> at My Digital School Angers, graduating with the title <strong>Manager de Projet Digital</strong>. This program deepened my expertise in both development and project management, preparing me for leadership roles in the tech industry.
            </p>
            <p className="text-lg leading-7">
              I have over 3 years of professional experience and 5 years of personal experience in web development. I’m currently seeking new opportunities where I can contribute my expertise and passion for building scalable web applications.
            </p>
          </section>

          {/* Skills and Competencies */}
          <section className="w-full max-w-4xl space-y-4">
            <h2 className="text-2xl font-semibold">Skills and Expertise</h2>
            <ul className="list-disc pl-5 text-lg leading-7">
              <li>Advanced experience in web application development with <strong>React.js, Symfony, Sylius, Vue.js</strong>.</li>
              <li>Proficient in web services development: <strong>REST API, Node.js</strong>.</li>
              <li>Knowledgeable in version control tools: <strong>GitHub, GitLab</strong>.</li>
              <li>Skilled in writing SQL queries and familiar with database systems: <strong>MySQL/MariaDB, SQL Server, NoSQL, MongoDB</strong>.</li>
              <li>Experienced with Docker and Linux command-line environments.</li>
              <li>Competent in system modeling: <strong>Merise, UML</strong>.</li>
              <li>Familiar with content management systems: <strong>WordPress</strong>.</li>
            </ul>
          </section>

          {/* Languages */}
          <section className="w-full max-w-4xl space-y-4">
            <h2 className="text-2xl font-semibold">Languages</h2>
            <p className="text-lg leading-7">
              <strong>Albanian:</strong> Native language <br/>
              <strong>English:</strong> C1 level or higher
            </p>
          </section>

          {/* Personal Interests */}
          <section className="w-full max-w-4xl space-y-4">
            <h2 className="text-2xl font-semibold">Personal Interests</h2>
            <p className="text-lg leading-7">
              Outside of work, I enjoy playing football, having participated in the sport for 3 years. I also have a passion for travel and have visited several countries including Germany, Belgium, Spain, the Netherlands, Croatia, Italy, and Albania.
            </p>
            <p className="text-lg leading-7">
              If my skills and experience align with your needs, let’s connect!
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  );
}
"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/TracingAnimation";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function About() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <TracingBeam className="px-6 my-10">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {/* Profile Section */}
            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
                Introduction
              </h2>
              <TextGenerateEffect 
            className='text-left text-[40px] md:text-5xl lg:text-6xl my-5'
            words='Hi, It&apos;s me again'
            />
              <div className=" prose prose-sm dark:prose-invert text-base lg:text-xl sm:text-sm my-4">
                <Image
                  src="/alti.png"
                  alt="Alti Profile Picture"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover"
                />
                I'm a <strong className="text-sky-300">Full Stack Developer with over 3 years of professional experience</strong>, specializing in creating robust and scalable web applications using React, Symfony, and PHP. Based in Angers, France, I’m passionate about web development and continuous improvement.
              </div>
            </div>

            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
                My Journey
              </h2>
              <Image
                  src="/my-journey.jpg"
                  alt="my-journey"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover"
                />
              <p className="text-xl mb-4">
                My Professional Journey
              </p>
              <div className="text-sm prose prose-sm dark:prose-invert">
                <p className="text-base lg:text-xl sm:text-sm my-4">
                  I began my journey in web development with a BTS in <strong className="text-sky-300">Services Informatiques aux Organisations (Option Solutions Logicielles et Applications Métiers)</strong> from Lycée Carcouët, Nantes. Here, I gained foundational skills in HTML, CSS, PHP, and C#, and completed two internships: one at Lycée La Colinière, Nantes, where I developed a web application, and another at Ateliers Perrault, where I created a Windows application.
                </p>
                <p className="text-base lg:text-xl sm:text-sm my-4">
                  I continued my studies with a <strong className="text-sky-300">Licence Professionnelle DIWA</strong> at Université de Le Mans (IUT de Laval), focusing on web application development and integration. During this period, I started my first work-study program as a web developer at Easycom, where I gained significant experience in Symfony, Sylius, and React.js.
                </p>
                <p className="text-base lg:text-xl sm:text-sm my-4" >
                  To further enhance my skills, I pursued a <strong className="text-sky-300" >Master’s degree in Full Stack Web Development</strong> at My Digital School Angers, graduating with the title <strong>Manager de Projet Digital</strong>. This program deepened my expertise in both development and project management, preparing me for leadership roles in the tech industry.
                </p>
                <p className="text-base lg:text-xl sm:text-sm my-4">
                  I have over 3 years of professional experience and 5 years of personal experience in web development. I’m currently seeking new opportunities where I can contribute my expertise and passion for building scalable web applications.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
                Skills and Expertise
              </h2>
              <ul className="list-disc pl-5 text-lg leading-7">
                <li>Advanced experience in web application development with <strong className="text-sky-300">React.js, Symfony, Sylius, Vue.js</strong>.</li>
                <li>Proficient in web services development: <strong className="text-sky-300">REST API, Node.js</strong>.</li>
                <li>Knowledgeable in version control tools: <strong className="text-sky-300">GitHub, GitLab</strong>.</li>
                <li>Skilled in writing SQL queries and familiar with database systems: <strong className="text-sky-300">MySQL/MariaDB, SQL Server, NoSQL, MongoDB</strong>.</li>
                <li>Experienced with Docker and Linux command-line environments.</li>
                <li>Competent in system modeling: <strong className="text-sky-300">Merise, UML</strong>.</li>
                <li>Familiar with content management systems: <strong className="text-sky-300">WordPress</strong>.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
                Languages
              </h2>
              <p className="text-xl mb-4">
                Language Proficiency
              </p>
              <div className="text-sm prose prose-sm dark:prose-invert">
                <p className="text-base lg:text-xl sm:text-sm my-4">
                  <strong className="text-sky-300">Albanian:</strong> Native language <br />
                  <strong className="text-sky-300">English:</strong> C1 level or higher
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="bg-black text-white-300 rounded-full text-base w-fit px-4 py-1 mb-4">
                Personal Interests
              </h2>
              <p className="text-xl mb-4">
                Outside of work
              </p>
              <div className="text-sm prose prose-sm dark:prose-invert">
                <p className="text-base lg:text-xl sm:text-sm my-4">
                  Outside of work, I enjoy playing football, having participated in the sport for 3 years. I also have a passion for travel and have visited several countries including Germany, Belgium, Spain, the Netherlands, Croatia, Italy, and Albania.
                </p>
                <p className="text-base lg:text-xl sm:text-sm my-4 text-sky-300 font-bold">
                  If my skills and experience align with your needs, let’s connect!
                </p>
              </div>
            </div>
          </div>
        </TracingBeam>
        <Footer />
      </div>
    </main>
  );
}

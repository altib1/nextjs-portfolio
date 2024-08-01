"use client";

import React from "react";

import { TechIKnow, TechIAmLearning, TechIKnowWell } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading my-5">
        What I
        <span className="text-sky-300"> know well</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {TechIKnowWell.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-50 w-50"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <h1 className="heading my-5">
        What I
        <span className="text-sky-300"> know</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {TechIKnow.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-50 w-50"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <h1 className="heading my-5">
            What I
        <span className="text-sky-300"> am learning</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {TechIAmLearning.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-50 w-50"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
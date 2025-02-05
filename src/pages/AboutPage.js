import React from "react";
import CardProfile from "../components/CardProfile";
import CardExperience from "../components/CardExperience";
import CardSkills from "../components/CardSkills";

function About() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto max-w-7xl text-center">
        <div>
          <h1 className="text-4xl font-bold text-black mb-10">About Me</h1>
        </div>

        {/* Grid Layout Responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center px-6">
          {/* Card Profile */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm">
              <CardProfile />
            </div>
          </div>

          {/* Card Skills */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm">
              <CardSkills />
            </div>
          </div>
        </div>

        {/* Card Experience */}
        <div className="mt-12 sm:mt-16 px-6">
          <CardExperience />
        </div>
      </div>
    </section>
  );
}

export default About;

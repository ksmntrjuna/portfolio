import React from "react";
import CardProfile from "../components/CardProfile";
import CardExperience from "../components/CardExperience";
import CardSkills from "../components/CardSkills";

function About() {
  return (
    <section className="text-white py-10 bg-gradient-to-b from-black to-white">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl text-white font-bold mb-5">About Me</h1>

        <div className="flex flex-col gap-8 mt-10 lg:flex-row lg:justify-between">
          {/* Aligning CardProfile and CardSkills side by side on large screens */}
          <CardProfile />
          <CardSkills />
        </div>

        {/* CardExperience stays below CardProfile and CardSkills */}
        <div className="mt-10">
          <CardExperience />
        </div>
      </div>
    </section>
  );
}

export default About;

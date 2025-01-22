import React from "react";
import CardProject from "../components/CardProject";

function ProjectPage() {
  return (
    <section className="text-center py-10 px-4 sm:px-6 lg:px-16">
      <div>
        <h1 className="text-4xl font-bold">My Project</h1>
        <p className="text-black mt-4">Check out my latest project below.</p>
      </div>

      <div className="mt-8">
        <CardProject />
      </div>
    </section>
  );
}

export default ProjectPage;

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import project1 from "../assets/images/imadikom.png";
import project2 from "../assets/images/natasha.png";
import project3 from "../assets/images/dashboard.png";
import project4 from "../assets/images/coconut.png";
import project5 from "../assets/images/login.png";
import project6 from "../assets/images/porto.png";
import project7 from "../assets/images/landingpage.png";


const CardProject = () => {
  const projects = [
    {
      id: 7,
      image: project7,
      title: "Landing Page",
      description: "Template Landing Page.",
      tools: "React, Tailwind CSS",
      link: "https://landing-page-gamma-bice.vercel.app/",
    },
    {
      id: 1,
      image: project1,
      title: "IMADIKOM",
      description:
        "A website for member data collection and organization activities.",
      tools: "Laravel, PHP, Tailwind CSS",
      link: "https://github.com/ksmntrjuna/laravel-imadikom.git",
    },
    {
      id: 2,
      image: project2,
      title: "Galeri Natasha",
      description:
        "A website for recording medical records of skincare treatments.",
      tools: "Laravel, PHP",
      link: "https://github.com/ksmntrjuna/rekam-medis.git",
    },
    {
      id: 3,
      image: project3,
      title: "UIUX Dashboard",
      description: "Dashboard design for website and mobile.",
      tools: "Figma",
      link: "https://www.figma.com/design/Fh1IM8BafcafuqrpoSYoFR/Dashboard?node-id=0-1&t=fq2vGVELwbIUnAzT-1",
    },
    {
      id: 4,
      image: project4,
      title: "UIUX Coconut Brain",
      description: "Mobile design and prototype of e-learning application.",
      tools: "Figma",
      link: "https://www.figma.com/design/iin04Iqass5y6GQtqZBZ9Y/UAS?node-id=126-285&t=iBPeurNL63kqp3fO-1",
    },
    {
      id: 5,
      image: project5,
      title: "UIUX Imadikom",
      description: "Web design and prototype.",
      tools: "Figma",
      link: "https://www.figma.com/design/LOEnFUQiOwgDFqZpDVJirQ/TUGAS-AKHIR?node-id=1-2&t=ZfsGZKpg8hDNrwMh-1",
    },
    {
      id: 6,
      image: project6,
      title: "xsmntR",
      description: "My Personal portfolio website.",
      tools: "React, Tailwind CSS",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-wrap items-start justify-center gap-6 p-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-80 max-h-[500px] rounded-lg overflow-hidden shadow-lg bg-white border-2 border-purple-700 flex flex-col"
        >
          <div className="relative group">
            <img
              className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
              src={project.image}
              alt={project.title}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-purple-500/50 transition-all duration-300">
              <h2 className="text-red-700 text-xl font-bold opacity-0 group-hover:opacity-100 transform group-hover:translate-y-10 transition-all duration-500">
                {project.tools}
              </h2>
            </div>
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
            <p className="text-gray-600 mt-2 h-16 overflow-hidden">
              {project.description}
            </p>
            <a
              href={project.link}
              className="mt-4 inline-flex items-center justify-center text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              View Project
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProject;

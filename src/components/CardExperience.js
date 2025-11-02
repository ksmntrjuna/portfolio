import React from "react";
import {
  MapPinIcon,
  BriefcaseIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

import heptacoLogo from "../assets/images/heptaco.jpg";
import jsoLogo from "../assets/images/jso.jpg";

function CardExperience() {
  const ExperienceItem = ({ number, logo, company, location, role, duration }) => (
    <div className="relative flex w-full">
      {/* Nomor Bulat */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center bg-zinc-500 text-white text-2xl font-bold rounded-full shadow-md z-10">
        {number}
      </div>

      {/* Card */}
      <div className="ml-10 flex-1 bg-white border border-gray-300 shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg transition-shadow duration-300">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>

        {/* Deskripsi */}
        <div className="flex flex-col text-black">
          <h5 className="font-semibold text-lg mb-2">{company}</h5>

          <div className="flex items-center mb-1">
            <MapPinIcon className="w-5 h-5 text-red-600 mr-2 stroke-2" />
            <p>{location}</p>
          </div>

          <div className="flex items-center mb-1">
            <BriefcaseIcon className="w-5 h-5 text-red-600 mr-2 stroke-2" />
            <p>{role}</p>
          </div>

          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 text-red-600 mr-2 stroke-2" />
            <p>{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-10 lg:px-20">
      <h3 className="text-black text-2xl font-bold mb-6">Experience</h3>

      {/* Timeline container */}
      <div className="relative flex flex-col gap-10 w-full max-w-3xl">
        {/* Garis vertikal utama (ditebalkan) */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-zinc-400 z-0" />

        {/* Card Items */}
        <ExperienceItem
          number={1}
          logo={heptacoLogo}
          company="Heptaco Digital Media"
          location="Yogyakarta, Indonesia"
          role="Backend Developer Intern"
          duration="Sep 2023 - Jan 2024"
        />
        <ExperienceItem
          number={2}
          logo={jsoLogo}
          company="PT. Sinergi Membangun Bangsa"
          location="Yogyakarta, Indonesia"
          role="Staff IT Intern"
          duration="Aug 2024 - Nov 2024"
        />
        <ExperienceItem
          number={3}
          logo=''
          company="Indonesian Clubbers"
          location="Yogyakarta, Indonesia"
          role="Parttime Sosial Media Specialist"
          duration="Aug 2025"
        />
        <ExperienceItem
          number={4}
          logo=''
          company="MORBIS"
          location="Yogyakarta, Indonesia"
          role="Programmer"
          duration="Sep 2025 - Now"
        />
      </div>
    </div>
  );
}

export default CardExperience;

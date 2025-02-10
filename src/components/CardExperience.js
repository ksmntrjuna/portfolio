import React from "react";
import {
  MapPinIcon,
  BriefcaseIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

import heptacoLogo from "../assets/images/heptaco.jpg";
import jsoLogo from "../assets/images/jso.jpg";

function CardExperience() {
  const renderExperience = (logo, company, location, role, duration) => (
    <div className="w-full lg:w-1/2 flex flex-col items-center background-white">
      <img
        src={logo}
        alt={`${company} logo`}
        className="w-20 h-20 object-cover rounded-full mb-2"
      />
      <h5 className="text-black font-semibold mb-2 text-center">{company}</h5>
      <div className="flex items-center mb-2 justify-center">
        <MapPinIcon className="w-5 h-5 text-red-600 mr-2 stroke-2" />
        <p>{location}</p>
      </div>
      <div className="flex items-center mb-2 justify-center">
        <BriefcaseIcon className="w-5 h-5 text-red-600 mr-2 stroke-2" />
        <p>{role}</p>
      </div>
      <div className="flex items-center justify-center">
        <CalendarIcon className="w-5 h-5 text-red-600 mr-2 stroke-2" />
        <p>{duration}</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col bg-white border-4 border-gray-500 shadow-md rounded-lg p-6">
      <h5 className="text-black text-center font-bold mb-4 text-xl">
        Experience
      </h5>

      <div className="relative flex flex-col lg:flex-row items-center text-black gap-6">
        {renderExperience(
          heptacoLogo,
          "Heptaco Digital Media",
          "Yogyakarta, Indonesia",
          "Backend Developer Intern",
          "Sep 2023 - Jan 2024"
        )}
        <div className="hidden lg:block w-1 h-48 bg-black"></div>
        {renderExperience(
          jsoLogo,
          "PT. Sinergi Membangun Bangsa",
          "Yogyakarta, Indonesia",
          "Staff IT Intern",
          "Aug 2024 - Nov 2024"
        )}
      </div>
    </div>
  );
}

export default CardExperience;

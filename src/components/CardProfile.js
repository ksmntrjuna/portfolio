import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

const profileData = [
  { label: "Name", value: "Juna Kusumantara", icon: <FaUser /> },
  { label: "Birth", value: "14 June 2003", icon: <FaCalendarAlt /> },
  { label: "Address", value: "Jakarta, Indonesia", icon: <FaMapMarkerAlt /> },
  {
    label: "Education",
    value: "Diploma Program of Informatic Engineering",
    icon: <FaGraduationCap />,
  },
];

function ProfileRow({ icon, label, value }) {
  return (
    <tr>
      <th className="font-medium w-1/3 pr-2 flex items-center text-sm sm:text-base md:text-lg">
        <span className="mr-3 text-lg sm:text-xl">{icon}</span>
        {label}
      </th>
      <td className="pl-2 text-sm sm:text-base md:text-lg">: {value}</td>
    </tr>
  );
}

function CardProfile() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-neutral-900 border border-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-md lg:max-w-lg w-full">
        <h2 className="text-white text-center font-semibold mb-4 text-lg sm:text-xl lg:text-2xl">
          Profile
        </h2>
        <table
          className="table-auto w-full text-left text-white"
          aria-label="Profile Information"
        >
          <tbody>
            {profileData.map((row, index) => (
              <ProfileRow
                key={index}
                icon={row.icon}
                label={row.label}
                value={row.value}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CardProfile;

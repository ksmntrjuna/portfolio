import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

function CardProfile() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md bg-zinc-500 shadow-md rounded-lg p-6 mx-4 md:mx-auto">
        <h2 className="text-white text-center font-semibold text-xl mb-6">
          Profile
        </h2>
        <table className="table-auto w-full text-left text-white">
          <tbody>
            {[
              { label: "Name", value: "Juna Kusumantara", icon: <FaUser /> },
              { label: "Birth", value: "14 June 2003", icon: <FaCalendarAlt /> },
              {
                label: "Address",
                value: "Yogyakarta, Indonesia",
                icon: <FaMapMarkerAlt />,
              },
              {
                label: "Education",
                value: "Diploma Program of Informatic Engineering",
                icon: <FaGraduationCap />,
              },
            ].map((row, index) => (
              <tr key={index}>
                <th className="font-medium pr-4 flex items-center">
                  <span className="mr-3">{row.icon}</span>
                  {row.label}
                </th>
                <td className="pl-2">: {row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CardProfile;

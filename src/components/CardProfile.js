import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

function CardProfile() {
  return React.createElement(
    "div",
    { className: "flex flex-col" },

    React.createElement(
      "div",
      {
        className:
          "flex flex-col bg-neutral-900 border border-white shadow-md rounded-lg p-6",
      },
      React.createElement(
        "h2",
        { className: "text-white text-center font-semibold mb-4" },
        "Profile"
      ),
      React.createElement(
        "table",
        { className: "table-auto w-full text-left text-white" },
        React.createElement(
          "tbody",
          null,
          [
            { label: "Name", value: "Juna Kusumantara", icon: <FaUser /> },
            { label: "Age", value: "21", icon: <FaUser /> }, // You can use an icon that fits best for "Age"
            { label: "Birth", value: "14 June 2003", icon: <FaCalendarAlt /> },
            {
              label: "Address",
              value: "Jakarta, Indonesia",
              icon: <FaMapMarkerAlt />,
            },
            {
              label: "Education",
              value: "Diploma Program of Informatic Engineering",
              icon: <FaGraduationCap />,
            },
          ].map((row, index) =>
            React.createElement(
              "tr",
              { key: index },
              React.createElement(
                "th",
                {
                  className: "font-medium w-1/3 pr-2 flex items-center",
                },
                React.createElement("span", { className: "mr-3" }, row.icon),
                row.label
              ),
              React.createElement("td", { className: "pl-2" }, `: ${row.value}`)
            )
          )
        )
      )
    )
  );
}

export default CardProfile;

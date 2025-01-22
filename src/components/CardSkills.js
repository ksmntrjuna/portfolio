import React, { useRef, useState } from "react";
import Slider from "react-slick";
import php from "../assets/images/php.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import laravel from "../assets/images/laravel.png";
import js from "../assets/images/js.png";
import mysql from "../assets/images/mysql.png";
import bootstraps from "../assets/images/bootstrap.png";
import vscode from "../assets/images/vscode.png";
import github from "../assets/images/github.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import "../styles/Slider.css";

function CardSkills() {
  const sliderRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const skills = [
    { name: "PHP", image: php },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Laravel", image: laravel },
    { name: "JavaScript", image: js },
    { name: "MySQL", image: mysql },
    { name: "Bootstraps", image: bootstraps },
    { name: "React", image: react },
    { name: "VSCode", image: vscode },
    { name: "GitHub", image: github },
    { name: "TailwindCSS", image: tailwind },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <button className="custom-next-arrow">▶</button>,
    prevArrow: <button className="custom-prev-arrow">◀</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  const handleWheel = (e) => {
    if (isScrolling) return;

    setIsScrolling(true);

    if (sliderRef.current) {
      if (e.deltaX > 0) {
        sliderRef.current.slickNext();
      } else if (e.deltaX < 0) {
        sliderRef.current.slickPrev();
      }
    }

    setTimeout(() => setIsScrolling(false), 500);
  };

  return (
    <div
      className="rounded-lg p-4 w-full max-w-4xl mx-auto"
      onWheel={handleWheel}
    >
      <h5 className="text-black font-bold mb-4 text-2xl text-center sm:text-xl md:text-3xl">
        Skills
      </h5>
      <div className="p-3 rounded-lg">
        <Slider ref={sliderRef} {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-2 text-center flex justify-center">
              <div className="flex flex-col items-center w-full">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="mx-auto w-24 h-24 object-contain" // Ensuring all images are the same size
                />
                <p className="mt-2 text-gray-700 text-sm font-medium">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardSkills;

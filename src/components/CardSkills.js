import React, { useRef, useState } from "react";
import Slider from "react-slick";
import php from "../assets/images/php.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import laravel from "../assets/images/laravel.png";
import js from "../assets/images/js.png";
import mysql from "../assets/images/mysql.png";
import bootstraps from "../assets/images/Bootstrap.png";
import vscode from "../assets/images/VSCode.png";
import github from "../assets/images/GitHub.png";
import react from "../assets/images/react.png";
import "../styles/Slider.css";

function CardSkills() {
  const sliderRef = useRef(null); // Create a reference for the slider
  const [isScrolling, setIsScrolling] = useState(false); // State to track scrolling

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
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    nextArrow: <div className="custom-next-arrow" />,
    prevArrow: <div className="custom-prev-arrow" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  // Handle horizontal mouse wheel scroll
  const handleWheel = (e) => {
    // Prevent excessive triggering of scroll
    if (isScrolling) return;

    setIsScrolling(true); // Set to true to block further scroll actions temporarily

    if (sliderRef.current) {
      // Check for horizontal wheel scroll (deltaX for left/right)
      if (e.deltaX > 0) {
        // Scroll right, move slider next
        sliderRef.current.slickNext();
      } else if (e.deltaX < 0) {
        // Scroll left, move slider previous
        sliderRef.current.slickPrev();
      }
    }

    // Timeout to reset the scrolling state after a short delay
    setTimeout(() => {
      setIsScrolling(false);
    }, 500); // 500ms debounce time to prevent rapid scrolling
  };

  return (
    <div
      className=" rounded-lg p-2 w-full max-w-4xl mx-auto" // Added max-width for responsiveness
      onWheel={handleWheel} // Add wheel event listener
    >
      <h5 className="text-white font-bold mb-4 text-2xl sm:text-xl md:text-3xl">
        Skills
      </h5>{" "}
      {/* Responsive text size */}
      <div className="bg-white p-3 rounded-full shadow-sm">
        <Slider ref={sliderRef} {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-2 text-center">
              {" "}
              
              <img
                src={skill.image}
                alt={skill.name}
                className="mx-auto w-16 h-16 object-contain"
              />
              <p className="mt-1 text-gray-700">{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardSkills;

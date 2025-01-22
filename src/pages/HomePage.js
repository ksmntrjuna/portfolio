import React from "react";
import { Typewriter } from "react-simple-typewriter";
import bgImage from "../assets/images/domain.png";
import resumeFile from "../assets/resume/Resume_Juna.pdf";
import profileImage from "../assets/images/me1.jpg";

function HomePage() {
  return (
    <section
      className="min-h-screen py-24 bg-cover bg-center flex-none"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">
              <Typewriter
                words={[
                  "Welcome to My Portfolio",
                  "Explore My Work",
                  "Connect With Me!",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="text-base md:text-lg mb-6 font-semibold text-red-600">
              Hi! I'm Juna Kusumantara, a passionate developer and UI/UX
              designer from Jakarta.
            </p>
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href={resumeFile}
                  download
                  className="border-2 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-black hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 17.25v1.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-1.5M12 3v13.5m0 0l-3.75-3.75M12 16.5l3.75-3.75"
                    />
                  </svg>
                  <span>Download Resume</span>
                </a>

                <a
                  href="/contact"
                  className="mt-4 sm:mt-0 border-2 border-white text-white py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-black hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full shadow-lg border-4 border-white object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

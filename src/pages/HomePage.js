import React from "react";
import bgImage from "../assets/images/domain.png";
import resumeFile from "../assets/resume/Resume_Juna.pdf";
import profileImage from "../assets/images/profile.jpg"; 

function HomePage() {
  return (
    <section
      className="text-white py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column: Hero Text */}
          <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl text-white font-bold mb-6">Welcome to My Portfolio</h1>
            <p className="text-lg mb-8 font-semibold text-red-600">
              Hi! I'm Juna Kusumantara, a passionate developer and UIUX designer from
              Jakarta.
            </p>
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="flex space-x-4">
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
                  className="border-2 border-white text-white py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-black hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Contact Me
                </a>  
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={profileImage}
              alt="Profile"
              className="w-80 h-80 rounded-full shadow-lg border-4 border-white object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

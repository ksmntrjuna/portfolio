import React from "react";
import phoneIcon from "../assets/images/phone.png";
import emailIcon from "../assets/images/email.png";

function ContactPage() {
  return (
    <section className="text-center py-10 px-4 sm:px-6 lg:px-24">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="text-gray-600 mt-4">
        Feel free to reach out via email or phone.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mx-4 sm:mx-8 lg:mx-16">
        {/* Phone Card */}
        <div className="bg-gradient-to-l from-gray-400 via-gray-300 to-white shadow-lg rounded-lg p-4 flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src={phoneIcon} alt="Phone Icon" className="w-10 h-10" />
          <div>
            <h2 className="text-lg font-semibold">Phone</h2>
            <a
              href="tel:+6285157679550"
              className="text-blue-700 hover:underline text-sm"
            >
              +6285157679550
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-gradient-to-l from-gray-400 via-gray-300 to-white shadow-lg rounded-lg p-4 flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src={emailIcon} alt="Email Icon" className="w-10 h-10" />
          <div>
            <h2 className="text-lg font-semibold">Email</h2>
            <a
              href="mailto:ksmntrjuna@gmail.com"
              className="text-blue-700 hover:underline text-sm"
            >
              ksmntrjuna@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

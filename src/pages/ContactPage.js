import React from "react";
import phoneIcon from "../assets/images/phone.png";
import emailIcon from "../assets/images/email.png";

function ContactPage() {
  return (
    <section className="text-center py-10 bg-gray-100">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="text-gray-600 mt-4">
        Feel free to reach out via email or phone.
      </p>

      <div className="flex justify-center mt-8 space-x-8">
        {/* Phone Contact */}
        <div className="flex items-center space-x-4">
          <img src={phoneIcon} alt="Phone Icon" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <a
              href="tel:+6285157679550"
              className="text-gray-700 hover:underline"
            >
              +6285157679550
            </a>
          </div>
        </div>

        {/* Email Contact */}
        <div className="flex items-center space-x-4">
          <img src={emailIcon} alt="Email Icon" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <a
              href="mailto:ksmntrjuna@gmail.com"
              className="text-gray-700 hover:underline"
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

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <span>
            &copy; {new Date().getFullYear()} Kumbh Travels. All rights
            reserved.
          </span>
        </div>
        <div>
          Phone
          +91 9316802278, +91 6351168010.
          Email
          kumbhtravels2025@gmail.com
        </div>
        <br></br>
        <div className="flex justify-center space-x-8">
          <a
            href="/privacypolicy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="pgterms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Payment Gateway Terms And Services
          </a>
          <a
            href="/packageterms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Travel Package Terms And Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

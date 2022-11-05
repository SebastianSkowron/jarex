import React, { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export const Footer = () => {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className="bg-primary_dark text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-gray-200 sm:py-2 sm:pl-4">
          &copy; {date} Jarex - Made with &#10084;&#65039; by
          <a
            href="https://codelark.pl"
            rel="noopener noreferrer"
            target="_blank"
            className="ml-1 text-primary hover:underline"
          >
            @Sebastian
          </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://facebook.com"
            rel="noreferrer"
            target="_blank"
            className="text-gray-500 hover:text-primary"
          >
            <FaFacebookSquare size={24} />
          </a>
          <a
            href="https://facebook.com"
            rel="noreferrer"
            target="_blank"
            className="pl-1 text-gray-500 hover:text-primary"
          >
            <FaTwitterSquare size={24} />
          </a>
          <a
            href="https://facebook.com"
            rel="noreferrer"
            target="_blank"
            className="pl-1 text-gray-500 hover:text-primary"
          >
            <FaInstagramSquare size={24} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

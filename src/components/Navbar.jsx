/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Component, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 600);
    });
  }, []);

  return (
    <div
      className={`font-semibold flex items-center h-20 px-6 justify-between top-0 stickeroza z-50 lg:bg-transparent lg:visible lg:text-white ${
        scroll
          ? "bg-white shadow-sm text-primary_dark"
          : "bg-white text-primary_dark backdrop-blur-0 invisible"
      }
      `}
    >
      <a className="flex-1 no-underline block h-8 md:invisible">
        <img
          className={`h-[180%] p-1 -mt-3 ${scroll ? "block" : "hidden"}`}
          src="/logo-navbar.png"
          alt="jarex-logo"
        />
      </a>
      <div className="flex-none hidden md:flex md:justify-center md:h-full">
        <Link
          to="home"
          spy={true}
          smooth={false}
          className="block h-full flex items-center mx-4 px-2 border-transparent transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary"
        >
          <FontAwesomeIcon icon={""} className="mr-3" /> Strona główna
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={false}
          className="block h-full flex items-center mx-4 px-2 border-transparent transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary"
        >
          <FontAwesomeIcon icon={""} className="mr-3" /> O firmie
        </Link>

        <Link
          to="offer"
          spy={true}
          smooth={false}
          className="block h-full flex items-center mx-4 px-2 border-transparent transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary"
        >
          <FontAwesomeIcon icon={""} className="mr-3" /> Oferta
        </Link>

        <Link
          to="contactform"
          spy={true}
          smooth={false}
          className="block h-full flex items-center mx-4 px-2 border-transparent transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary"
        >
          <FontAwesomeIcon icon={""} className="mr-3" /> Kontakt
        </Link>
      </div>
      <div className="flex-1 items-center justify-end hidden md:flex">
        {/* <Avatar
          image="https://gustui.s3.amazonaws.com/avatar.png"
          className="cursor-pointer my-2"
        /> */}
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className={`text-3xl cursor-pointer md:hidden ${scroll ? "" : ""}`}
      />
      {mobileOpen && (
        <div
          className={`bg-white text-primary_dark absolute top-full left-0 flex flex-col w-full py-8 shadow-sm lg:hidden`}
        >
          <div className="flex-1 flex flex-col items-center text-xl">
            <Link
              to="home"
              spy={true}
              smooth={false}
              className="mb-4 block h-full flex items-center mx-4 px-2 border-transparent transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary"
            >
              <FontAwesomeIcon icon={""} className="mr-3" /> Strona główna
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={false}
              className="mb-4 block h-full flex items-center mx-4 px-2 border-transparent transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary"
            >
              <FontAwesomeIcon icon={""} className="mr-3" /> O firmie
            </Link>

            <Link
              to="offer"
              spy={true}
              smooth={false}
              className="mb-4 block h-full flex items-center mx-4 px-2 border-transparent transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary"
            >
              <FontAwesomeIcon icon={""} className="mr-3" /> Oferta
            </Link>

            <Link
              to="contactform"
              spy={true}
              smooth={false}
              className="mb-4 block h-full flex items-center mx-4 px-2 border-transparent transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary"
            >
              <FontAwesomeIcon icon={""} className="mr-3" /> Kontakt
            </Link>
            {/* <Avatar
              image="https://gustui.s3.amazonaws.com/avatar.png"
              status="online"
              className="cursor-pointer my-2"
            /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

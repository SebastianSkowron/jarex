import React from "react";
import { Link } from "react-scroll";

export const CallToAction = ({ contactRef }) => {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12 mt-10 md:mt-20 mb-20 md:mb-40">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto bg-glitter md:rounded-lg sm:rounded-none">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            <span className="block">Masz pomysł na współpracę?</span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <Link
                to="contactform"
                spy={true}
                smooth={false}
                className="cursor-pointer py-4 px-6 bg-primary hover:bg-btn_primary text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
              >
                Skontaktuj się
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

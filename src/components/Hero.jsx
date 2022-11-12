import React, { useState, useEffect } from "react";

export const Hero = () => {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear() - 2011);
  useEffect(() => {
    getYear();
  }, []);

  return (
    <div id="home" class="hero-pattern flex justify-center items-center h-screen -mt-20">
      {/* <span className="opacity-hero"></span> */}
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto z-10 my-auto">
        <div class="container mx-auto flex  items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/logo-hero.png"
          ></img>
        </div>
        <p class="lg:text-lg font-semibold text-center mb-2 md:mb-3">
          <hr className="line rounded-full hidden md:block text-primary" />
        </p>

        <h2 class="text-white text-4xl lg:text-6xl font-bold text-center mb-4 md:mb-6">
          Przedsiębiorstwo <br /> handlowo usługowe
        </h2>

        <p class="max-w-screen-md text-[#e5e5e5] md:text-lg text-center mx-auto">
          Firma zajmująca się usługami handlowymi na rynkach Polski i Europy.
          <br /> Sumiennie zbierane doświadczenie od {date} lat przełożone na
          wysoką jakość i komfort.
        </p>
      </div>
    </div>
  );
};

export default Hero;

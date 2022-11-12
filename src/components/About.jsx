import React, { useState, useEffect } from "react";

export const About = () => {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear() - 2011);
  useEffect(() => {
    getYear();
  }, []);

  return (
    <div id="about" className="mt-20 md:mt-40 text-center lg:text-left bg-[#f7f7f7] rounded-lg mb-10 md:mb-24 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="mb-6 text-[32px] font-bold text-primary_dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              <span className="underlined-primary">O firmie</span>
            </h2>
            <p className="mb-9 text-base leading-relaxed text-light_dark">
              Jesteśmy przedsiębiorstwem zajmującym się handlem od {date} lat.
              Naszą specjalnością jest hurtowa sprzedaż warzyw i owoców. Swoją
              pracą zaopatrujemy hurtownie i inne placówki, działające na
              terenie całej Polski. <br /> <br /> Dzięki ciągłemu rozwojowi i
              nabywaniu nowych doświadczeń z partnerami, jesteśmy w stanie
              zapewnić szeroki asortyment warzyw i owoców.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="/about-img-1.jpg"
              alt="about-img-1-cucumbers-and-tomatoes"
            />

            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="/about-img-2.jpg"
              alt="about-img-2-cabbages"
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded-lg shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="/about-img-3.jpg"
              alt="about-img-3-tomatoes-in-greenhouse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { Routes, Route, useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();

  const navigateToOffer = () => {
    navigate("../pages/Offer");
  };

  return (
    <section id="offer" className="bg-[#f7f7f7] py-20">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        {/* <h1 className="text-3xl text-center text-primary_dark">
                    Nasze produkty
                </h1> */}
        <h2 className="mb-6 text-[32px] font-bold text-primary_dark text-center sm:text-[40px] lg:text-[36px] xl:text-[40px]">
          <span className="underlined-primary">Nasza oferta</span>
        </h2>
        <p className="mb-9 text-base leading-relaxed text-light_dark text-center">
          W naszej ofercie posiadamy warzywa, które są produkowane w naszym
          kraju. Głównymi produktami są ogórki wszelkiej klasy jakości oraz
          zależnie od sezonu pomidory, kapusta, ziemniaki, cebula.
        </p>
      </div>

      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-lg"
              src="/cucumber-product1.jpg"
              alt="product"
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl font-semibold text-primary_dark">
              Ogórki gruntowe
            </h1>
            <p className="text-light_dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quibusdam aperiam quod necessitatibus sequi autem recusandae aspernatur soluta dicta debitis qui deserunt, delectus facere dolorum at, numquam ut, voluptate nulla.
            </p>
          </div>
        </div>
        <div className="hidden lg:block overflow-hidden bg-primary rounded-r-full absolute h-80 w-1/3 -bottom-24 left-0"></div>
      </div>
      <div className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-lg"
              src="/cabbage-product1.jpg"
              alt="product"
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl font-semibold text-primary_dark">
              Kapusta
            </h1>
            <p className="text-light_dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam laborum nam doloremque odio nobis sunt non expedita doloribus delectus explicabo ex, facilis aliquam! Earum sequi ad magnam corrupti harum.
            </p>
          </div>
        </div>
        <div className="hidden lg:block overflow-hidden bg-primary rounded-l-full absolute h-80 w-1/3 -bottom-24 right-0"></div>
      </div>
      <div className="text-center mt-20 md:mt-40">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-primary_dark mb-4">
          oraz wiele innych...
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-light_dark">
          Jeśli szukasz innych produktów, <br className="lg:hidden" /> to znajdziesz je na naszej stronie.{" "}
          <br /> Zapraszamy do skorzystania z naszej bogatej oferty.
        </p>
        <button
          class="flex mx-auto mt-8 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-btn_primary rounded-lg text-lg"
          onClick={navigateToOffer}
        >
          więcej
        </button>
      </div>
    </section>
  );
};

export default Products;

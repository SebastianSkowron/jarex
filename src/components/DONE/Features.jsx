import { ImTruck } from "react-icons/im";
import { FiRefreshCcw } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

export const Features = () => {
  return (
    <section class="text-gray-400 bg-white body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h2 className="mb-6 text-[32px] font-bold text-primary_dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
            <span className="underlined-primary">Zaufaj nam</span>
          </h2>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-light_dark text-opacity-80">
            Wraz z naszym wieloletnim doświadczeniem zaufało nam tysiące
            klientów. Dzięki naszemu podejściu odgrywamy dominującą rolę na
            rynku. Firma gdzie każdy detal ma wielkie znaczenie. Łączymy
            nowoczesność i tradycje.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-primary inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary mb-5 flex-shrink-0">
              <ImTruck size={32} />
            </div>
            <div class="flex-grow">
              <h2 class="text-primary_dark text-lg title-font font-medium mb-3">
                Rozwój i dostawa
              </h2>
              <p class="leading-relaxed text-base">
                Ciągła modernizacja firmy przekłada się na pewną i profesjonalną
                dostawę produktów. Nie musisz martwić się opóźnieniami,
                zaplanowane dostawy zawsze są na czas.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary mb-5 flex-shrink-0">
              <FaHandshake size={32} />
            </div>
            <div class="flex-grow">
              <h2 class="text-primary_dark text-lg title-font font-medium mb-3">
                Profesjonalizm i otwartość
              </h2>
              <p class="leading-relaxed text-base">
                Priorytetowe podejście do obsługi klienta oraz realizacji
                zleceń. Wszystkim naszym partnerom zapewniamy specjalne
                podejście i odpowiednie rabaty produktowe.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary mb-5 flex-shrink-0">
              <FiRefreshCcw size={32} />
            </div>
            <div class="flex-grow">
              <h2 class="text-primary_dark text-lg title-font font-medium mb-3">
                Zwroty i wymiana
              </h2>
              <p class="leading-relaxed text-base">
                Najważniejszym atutem naszych produktów jest ich świeżość.
                Prowadzimy politykę reklamacji oraz zwrotu naszych towarów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

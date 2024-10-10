import { RightArrow } from "@/components/Icons/Icons";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="bg-white py-16 md:py-24">
      <div className="mx-auto px-4 container">
        <div className="flex md:flex-row flex-col items-center">
        <div className="md:w-1/2">
            <h2 className="mb-6 font-light font-montserrat text-[#2D3688] text-3xl md:text-4xl">
              Quiénes Somos
            </h2>
            <p className="mb-4 text-gray-700 text-lg">
              Control Hidráulico de Occidente S.A. de C.V. es una empresa líder
              en la industria de equipos hidráulicos y soluciones de ingeniería.
              Con casi cuatro décadas de experiencia, nos hemos consolidado como
              referentes en el sector de la oleohidráulica.
            </p>
            <p className="mb-6 text-gray-700 text-lg">
              Nuestro compromiso con la excelencia y la innovación nos impulsa a
              ofrecer soluciones de vanguardia que satisfacen las necesidades
              más exigentes de nuestros clientes en diversos sectores
              industriales.
            </p>
            <a
              href="#servicios"
              className="inline-flex items-center text-[#E5202D] hover:text-[#C41D27] transition duration-300"
            >
              Descubre nuestros servicios
              <RightArrow className="ml-2 w-5 h-5 text-[#E5202D]" />
            </a>
          </div>
          <div className="mb-8 md:mb-0 md:pl-16 md:w-1/2">
            <Image
              src="/assets/heroHidraulica.jpeg"
              alt="Sobre nosotros"
              width={500}
              height={300}
              className="shadow-lg rounded-lg"
            />
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

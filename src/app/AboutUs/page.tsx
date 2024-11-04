"use client";
import React from "react";
import OurValuesSection from "../sections/OurValuesSection/OurValuesSection";
import OurPartnetsSection from "../sections/OurPartnetsSection/OurPartnetsSection";
import TextParallaxContent from "@/components/TextParallaxContent/TextParallaxContext";
import ChavoyaBannerSection from "../sections/ChavoyaBannerSection/ChavoyaBannerSection";
import AnimatedLogo from "@/components/AnimatedLogo/AnimatedLogo";

const Page = () => {
  return (
    <div>
      <div className="bg-white">
        <TextParallaxContent
          imgUrl="/assets/imgAbout_Header.jpg"
          heading="Quiénes Somos"
          subheading="Qué Nos Impulsa"
        >
          <div className="flex md:flex-row flex-col gap-16 bg-white mx-auto pt-12 pb-24 max-w-5xl">
            <div className="flex flex-col mr-5 w-full">
              <h2 className="col-span-1 md:col-span-8 font-bold text-[#2D3688] text-3xl">
                Descubre Nuestra Trayectoria y Valores
              </h2>
              <div className="bg-white mt-5 p-3 rounded-lg">
                <AnimatedLogo className="mx-auto my-auto p-10 w-96 h-96 object-contain" />
              </div>
            </div>

            <div className="col-span-1 md:col-span-8">
              <p className="mb-4 text-neutral-600 text-xl md:text-2xl">
                Somos Control Hidráulico de Occidente S.A. de C.V. una empresa
                con 38 años de experiencia, fundada en el año 2007 con sede en
                Guadalajara, Jalisco. Nos dedicamos al área de Oleohidráulica,
                contamos con un grupo de colaboradores especialistas calificados
                en el sector hidráulico y con experiencia en el rubro.
              </p>
              <p className="mb-8 text-neutral-600 text-xl md:text-2xl">
                Nos esforzamos en dar soluciones a nuestros clientes. Somos la
                mejor opción en cuanto al suministro y montaje de equipos
                hidráulicos y a la ejecución de proyectos de ingeniería,
                caracterizados por un excelente nivel de calidad. Estamos
                convencidos que lo más importante para nosotros es tener
                clientes verdaderamente complacidos, y colaboradores y
                proveedores completamente satisfechos.
              </p>
            </div>
          </div>
        </TextParallaxContent>
      </div>
      <OurValuesSection />
      <OurPartnetsSection />
      <div>
        <ChavoyaBannerSection/>
      </div>
    </div>
  );
};

export default Page;

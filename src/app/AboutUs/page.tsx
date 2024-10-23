"use client";
import React from "react";
import OurValuesSection from "../sections/OurValuesSection/OurValuesSection";
import InfiniteScrollList from "../sections/OurJourneySection/OurJourneySection";
import OurPartnetsSection from "../sections/OurPartnetsSection/OurPartnetsSection";
import TextParallaxContent from "@/components/TextParallaxContent/TextParallaxContext";
import Image from "next/image";
import { BannerHomeSection } from "../sections/BannerHomeSection/BannerHomeSection";

const Page = () => {
  return (
    <div>
      <div className="bg-white">
        <TextParallaxContent
          imgUrl="/assets/imgAbout_Header.jpg"
          heading="Quiénes Somos"
          subheading="Qué Nos Impulsa"
        >
          <div className="flex md:flex-row flex-col gap-8 bg-white mx-auto px-4 pt-12 pb-24 max-w-5xl">
            <div className="flex flex-col mr-5">
              <h2 className="col-span-1 md:col-span-4 font-bold text-[#2D3688] text-3xl">
                Descubre Nuestra Trayectoria y Valores
              </h2>
              <div className="bg-zinc-500 mt-5 p-3 rounded-lg">
                <Image src="/assets/logo_controlHidraulico.png" width={400} height={400} alt="Logo"/>
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
      {/* <InfiniteScrollList /> */}
      <OurPartnetsSection />
      <BannerHomeSection/>
    </div>
  );
};

export default Page;

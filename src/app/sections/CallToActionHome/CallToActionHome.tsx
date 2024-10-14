"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonNeubrutalism from "@/components/ButtonNeubratalism/ButtonNeubrutalism";

const CallToAction = () => {
  return (
    <section className="relative bg-white py-12">
      <div className="top-0 left-0 absolute w-full h-1/4"></div>
      <div className="relative z-10 flex lg:flex-row flex-col justify-between items-center space-y-6 lg:space-y-0 mx-auto container">
        {/* Ajuste de la imagen */}
        <div className="relative lg:-top-10 flex justify-center w-full lg:w-1/2">
          <Image
            src="/assets/imgConoce_1.jpg"
            alt="Plano de Equipamiento Hidráulico"
            width={500}
            height={500}
            className="shadow-lg transform rotate-3"
          />
        </div>
        <div className="bg-white shadow-lg p-8 rounded-lg w-full lg:w-1/2">
          <h2 className="mb-4 font-bold text-3xl text-black">
            Conoce nuestras soluciones
          </h2>
          <p className="mb-6 text-gray-700">
            Deja tus datos ahora y recibe una consulta gratuita sobre nuestros
            sistemas de equipamiento hidráulico.
          </p>
          <Link href="#Services">
            <ButtonNeubrutalism textColor="red" colorHover="red">Explorar</ButtonNeubrutalism>
          </Link>
         
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

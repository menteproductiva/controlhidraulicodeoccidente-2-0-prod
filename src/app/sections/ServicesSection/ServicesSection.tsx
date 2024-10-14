"use client"
import { Brain, Hammer, ShopCart } from "@/components/Icons/Icons";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import React from "react";

// cambiar fondo azul y card blanca 
const services = [
    { title: 'Venta de Equipos', description: 'Amplia gama de equipos hidráulicos de alta calidad para todas sus necesidades.',icon: <Hammer/> },
    { title: 'Mantenimiento', description: 'Servicios de mantenimiento preventivo y correctivo para optimizar el rendimiento de sus equipos.', icon: <ShopCart/> },
    { title: 'Reparación', description: 'Reparaciones expertas que extienden la vida útil de su maquinaria hidráulica.' ,icon: <Brain/>},
  ]


const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-gray-100 py-16 md:py-24">
      <div className="mx-auto px-4 container">
        <h2 className="mb-12 font-light font-montserrat text-[#2D3688] text-3xl text-center md:text-4xl">
          Nuestros Servicios
        </h2>
        <HoverEffect items={services} />
      </div>
    </section>
  );
};

export default ServicesSection;

import React from "react";
import ShimmerBorderCard from "@/components/ShimmerBorderCard/ShimmerBorderCard";
const services = [
  {
    title: "Bombas Hidraulicas",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Instalamos sistemas hidráulicos con precisión y eficiencia, garantizando un rendimiento óptimo y seguro para tus proyectos industriales.",
    time: "De 2 días a 2 semanas. Depende del tamaño y la complejidad del sistema.",
    buttonText: "SOLICITAR COTIZACIÓN",
    href: "#",
  },
  {
    title: "Cilindros Hidraulicos",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Realizamos inspecciones periódicas para prevenir fallos, extender la vida útil de tus equipos y garantizar su eficiencia y seguridad.",
    time: "De 4 horas a 2 días. Depende del tamaño y la complejidad del sistema.",
    buttonText: "SOLICITAR COTIZACIÓN",
    href: "#",
  },
  {
    title: "Valvulas Hidraulicas",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Reparamos fallos rápidamente, restaurando tus sistemas hidráulicos y minimizando tiempos de inactividad para asegurar su óptimo rendimiento.",
    time: "De 1 a 5 días. Depende de la gravedad del fallo y la complejidad del sistema.",
    buttonText: "SOLICITAR COTIZACIÓN",
    href: "#",
  },
];

const ProjectsServicesSection = () => {
  return (
    <section className="flex flex-col bg-[#2D3688] py-16">
      <h2 className="mb-8 font-bold text-3xl text-center text-white">
        Instalación y Mantenimiento de Sistemas Hidráulicos
      </h2>
      <div className="grid grid-cols-3 text-black">
        {services.map((item) => (
          <ShimmerBorderCard
            title={item.title}
            titleDescription={item.titleDescription}
            description={item.description}
            time={item.time}
            buttonText={item.buttonText}
            href="#"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsServicesSection;

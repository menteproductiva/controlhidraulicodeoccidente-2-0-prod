"use client";
import React, { useState } from "react";
import TextParallaxContent from "@/components/TextParallaxContent/TextParallaxContext";
import { FiTool, FiSettings } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import RevealCards from "@/components/RevealCards/RevealCards";
import ChavoyaBannerSection from "../sections/ChavoyaBannerSection/ChavoyaBannerSection";

const services = [
  {
    title: "Bombas Hidráulicas",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Reparación de bombas de pistón, de paletas, y de engranajes, enfocada en restaurar su capacidad de generar flujo y presión adecuada.",
    category: "Reparación",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/bombasHidraulicas.jpg",
    Icon: FiSettings,
  },
  {
    title: "Filtros Hidráulicos",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Sustitución de elementos filtrantes y reparación de sistemas de filtración, asegurando la limpieza del fluido hidráulico y evitando fallos.",
    category: "Reparación",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/filtrosHidraulicos.jpg",
    Icon: FaTools,
  },
  {
    title: "Cilindros Hidráulicos",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Reparación de cilindros de doble acción y simple acción, incluyendo reemplazo de sellos, pistones y ajustes para garantizar su operación",
    category: "Reparación",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/cilindrosHidraulicos.jpg",
    Icon: FiTool,
  },
  {
    title: "Tuberías y conexiones",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Sustitución y reparación de tuberías, mangueras y conectores hidráulicos para prevenir fugas y asegurar la eficiencia del sitema.",
    category: "Reparación",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/tuberiasConexiones.jpg",
    Icon: FaTools,
  },
  {
    title: "Válvulas Hidráulicas",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Diagnóstico y reparación de válvulas de control de flujo, presión y dirección, asegurando su precisión y capacidad de respuesta.",
    category: "Reparación",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/valvulasHidraulicas.jpg",
    Icon: FaTools,
  },
  {
    title: "Motores Hidráulicos",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Reparación y ajuste de motores hidráulicos de pistón axial y radial para restaurar su rendimiento y eficiencia.",
    category: "Reparación",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/motoresHidraulicos.jpg",
    Icon: FaTools,
  },
  
  {
    title: "Unidades de Potencia",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Reparación y mantenimiento de centrales hidráulicas que incluyen bombas, motores y válvulas, asegurando la eficiencia operativa.",
    category: "Reparación",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/unidadesPotencia.jpg",
    Icon: FaTools,
  },
  {
    title: "Acumuladores Hidráulicos",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Inspección y reparación de acumuladores, garantizando su correcta función en la absorción de choques y regulación de presión.",
    category: "Reparación",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/acumuladoresHidraulicos.jpg",
    Icon: FaTools,
  },
  
  {
    title: "Inspección Visual",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Revisamos el estado físico de todos los componentes, para detectar signos de desgaste, fugas, corrosión o daños visibles.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/inspeccionVisual.jpg",
    Icon: FaTools,
  },
  {
    title: "Medición y Presión Caudal",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Verificamos que el flujo y la presión del fluido estén dentro de los rangos operativos adecuados para garantizar el correcto funcionamiento.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/medicionPresion.jpg",
    Icon: FaTools,
  },
  {
    title: "Análisis de Fuga",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Identificamos y localizamos puntos de escape de fluido en componentes como mangueras, conexiones, válvulas o cilindros.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/analisisFuga.jpg",
    Icon: FaTools,
  },
  {
    title: "Revisión de Componentes",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Inspeccionamos elementos clave como bombas, válvulas, cilindros, mangueras y conexiones. Nuestro objetivo es identificar daños.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/revisionComponentes.jpg",
    Icon: FaTools,
  },
  {
    title: "Análisis de Fluido Hidráulico",
    titleDescription: "Tiempo de mantenimiento",
    description:"Examinamos el estado del aceite o fluido utilizando en el sistema hidráulico para detectar contaminantes, desgaste o perdida.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/análisisFluido.jpg",
    Icon: FaTools,
  },
  {
    title: "Pruebas de Rendimiento",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Evaluamos el funcionamiento del sistema mientras opera a su capacidad máxima o cerca de ella.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/pruebasRendimiento.jpg",
    Icon: FaTools,
  },
  {
    title: "Evaluación de Fugas Int.",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Detectamos pérdidas de presión o caudal dentro de componentes como cilindros, bombas y válvulas, que son visibles externamente.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/evaluacionFugas.jpg",
    Icon: FaTools,
  },
  {
    title: "Revisión de Tubería y Conexiones",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Inspeccionamos las líneas de flujo y los puntos de unión para detectar posibles fugas, obstrucciones o daños.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/revisionTuberia.jpg",
    Icon: FaTools,
  },
  {
    title: "Informes de Diagnósticos",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Detallamos los hallazgos obtenidos durante la inspección del sistema. Incluimos el estado de los componentes.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/informeDiagnostico.jpg",
    Icon: FaTools,
  },
  {
    title: "Recomendaciones de mantenimiento",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Recomendamos distintas practicas y equipo para que tu equipo siempre este en optimas condiciones.",
    category: "Diagnóstico",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/recomendacionesMantenimiento.jpg",
    Icon: FaTools,
  },
  {
    title: "Consultoría Técnica",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Asesoramos en la optimización de sistemas hidráulicos, brindando soluciones personalizadas para maximizar su rendimiento y durabilidad. ",
    category: "Otros Servicios",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/consultoriaTecnica.jpg",
    Icon: FaTools,
  },
  {
    title: "Diseño de Sistemas Hidráulicos",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Diseñamos sistemas hidráulicos personalizados que se adaptan a tus necesidades, garantizando eficiencia, precisión y rendimiento óptima para tus proyectos industriales.",
    category: "Otros Servicios",
    buttonText: "SOLICITAR COTIZACIÓN",
    url: "/assets/services/diseño-sistemaHidraulico.jpg",
    Icon: FaTools,
  },
];

const Page = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div>
      <div className="bg-white">
        <TextParallaxContent
          imgUrl="/assets/imgServices.jpg"
          heading="Soluciones Hidráulicas "
          subheading="Integrales para todas tus Necesidades"
        >
          <section className="bg-gray-100 py-12">
            <h2 className="mb-8 font-bold text-3xl text-center text-gray-800">
              Instalación y Mantenimiento de Sistemas Hidráulicos
            </h2>
            <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-5 mx-auto max-w-7xl">
              {services.map((service, index) => (
                <RevealCards
                  key={index}
                  title={service.title}
                  category={service.category}
                  description={service.description}
                  imgSrc={service.url}
                />
              ))}

            </div>
          </section>
        </TextParallaxContent>
      </div>
      <ChavoyaBannerSection />
    </div>
  );
};

export default Page;

import Image from "next/image";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ProductSection from "./sections/ProductSection/ProductSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import CallToAction from "./sections/CallToActionHome/CallToActionHome";

export default function Home() {
  return (
    <div>
      <HeroSection
         id="inicio"
         title="Líderes en Equipos Hidráulicos y Soluciones de Ingeniería"
         description="Con 38 años de experiencia en oleohidráulica, ofrecemos soluciones confiables y eficientes."
         primaryActionText="Solicitar Cotización"
         primaryActionLink="#contacto"
         secondaryActionText="Ver Catálogo"
         secondaryActionLink="#productos"
         imageSrc="/assets/heroHidraulica.jpeg"
         imageAlt="Equipo hidráulico"
      />
      <CallToAction/>
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <ContactSection />
    </div>
  );
}

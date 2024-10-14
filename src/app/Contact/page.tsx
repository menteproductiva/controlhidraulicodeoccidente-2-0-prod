import React from "react";
import ContactSection from "../sections/ContactSection/ContactSection";
import { HeroSection } from "../sections/HeroSection/HeroSection";

const Page = () => {
  return (
    <>
      <HeroSection
        id="contacto"
        title="Contáctanos y resolvamos tus dudas"
        description="Si tiene preguntas o necesita asistencia, no dude en contactarnos. Nuestro equipo estará encantado de asistirle."
        primaryActionText="Contáctenos"
        primaryActionLink="#contacto-form"
        imageSrc="/assets/heroHidraulica.jpeg" 
        imageAlt="Persona hablando por teléfono en oficina de soporte"
      />
      <ContactSection />
    </>
  );
};

export default Page;

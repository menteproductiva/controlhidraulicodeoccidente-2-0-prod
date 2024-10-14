"use client"
import Carousel from '@/components/Carousel/Carousel'
import Testimonial from '@/components/Testimonials/Testimonials'
import React, { useState } from 'react'

const data = [
    {
      "name": "Alejandra Gomez",
      "role": "Ingeniero en Mejora continua",
      "testimonial": "La atención fue excelente desde el primer contacto. El equipo llegó a tiempo, identificó el problema rápidamente y lo resolvió sin contratiempos. ¡Muy profesionales y eficientes! Definitivamente los recomendaría a cualquier persona que necesite servicios hidráulicos confiables.",
      "image": "assets/meca.jpeg"
    },
    {
      "name": "Fausto Vallejo",
      "role": "Ingeniero Mecatronico",
      "testimonial": "Estamos muy satisfechos con el trabajo realizado. No solo solucionaron nuestros problemas de tuberías, sino que también nos propusieron mejoras para optimizar el rendimiento hidráulico de nuestras instalaciones. La calidad del servicio fue impecable, y los resultados superaron nuestras expectativas.",
      "image": "assets/mejora.jpg"
    }
  ]
const TestimonialsHomeSection = () => {
    const [transition, setTransition] = useState("fade");
    function changeTransition(transition: string) {
        setTransition(transition);
      }

  return (
    <section id='testimonials'  className="bg-white py-16 md:py-24 h-[45rem]">
        <Carousel changeTransition={changeTransition} transition={transition}>
        {data.map((item: any, i: number) => {
            return <Testimonial data={item} key={i} variants={transition} />;
          })}
        </Carousel>
       
    </section>
  )
}

export default TestimonialsHomeSection
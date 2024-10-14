"use client"
import { GoogleGeminiEffect } from '@/components/ui/google-geminis-effect'
import React, { useRef } from 'react'
import { useScroll, useTransform } from "framer-motion";


export const BannerHomeSection = () => {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  return (
    <div className="relative dark:border-white/[0.1] bg-gradient-to-br from-[#2D3688] to-[#1A2056] pt-40 dark:border rounded-md w-full h-[80rem] overflow-clip"
    ref={ref}>
        <GoogleGeminiEffect
            title='Descubre CHAVOYA S.A de C.V'
            description='Nuestra aliada en soluciones especializadas que complementan y potencian tus proyectos'
            pathLengths={[
                pathLengthFirst,
                pathLengthSecond,
                pathLengthThird,
                pathLengthFourth,
                pathLengthFifth,
            ]}
        />
    </div>
  )
}

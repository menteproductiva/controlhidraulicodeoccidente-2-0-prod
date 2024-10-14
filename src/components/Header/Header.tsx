"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { CloseIcon, Menu } from '../Icons/Icons'
import { motion } from 'framer-motion'

const options = [
  {
    title: "Inicio",
    href: "/"
  },
  {
    title: "Contacto",
    href: "/Contact"
  },
  {
    title: "Soporte Técnico",
    href: "/TechnicalSupport"
  },
  {
    title: "Nosotros",
    href: "/AboutUs"
  },
  {
    title: "Productos",
    href: "/Products"
  },
  {
    title: "Servicios",
    href: "/Servicies"
  }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  
  return (
    <header className="top-0 right-0 left-0 z-50 fixed bg-[#133e76] bg-red shadow-md text-white">
      <div className="flex justify-between items-center mx-auto px-4 py-3 container">
        <Image src="/assets/logo_controlHidraulico.png" alt="Control Hidráulico de Occidente" width={180} height={60} />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <ul className="flex md:flex-row flex-col md:space-x-8 space-y-2 md:space-y-0 p-4 md:p-0">
            {options.map((item, index) => (
              <li key={index}>
                <motion.a
                  href={`${item.href.replace(/ /g, '-')}`}
                  className="text-white transition duration-300"
                  whileHover={{ rotateX: 360, scale: 1.1 }} // Efecto de flip en hover
                  style={{ display: 'block', perspective: 1000 }} // Perspectiva para el 3D
                >
                  {item.title}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

import Image from "next/image";
import React from "react";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center bg-[#F3F4F6] py-8">
      <div className="m-2 rounded-xl h-90">
        {/* Menus */}
        <div className="flex flex-row md:flex-row justify-around items-center md:items-center">
          {/* Left logo + description */}
          <div className="flex flex-col items-center w-full md:w-1/3 text-center">
            <Image width={300} height={100} src="/assets/logo_3controlHidraulico.png" alt="Hidraulica" />
            <p className="mt-3 text-black">
              Empresa dedicada al área de Oleohidráulica. La mejor opción en cuanto al suministro y montaje de equipos hidráulicos.
            </p>
          </div>

          {/* Explore Menu */}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h4 className="mb-2 px-2 font-bold text-black">Explorar</h4>
            <ul className="space-y-2 text-[#0b4a9b]">
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md hover:text-white cursor-pointer">
                <Link href="/AboutUs">Nosotros</Link>
              </li>
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md hover:text-white cursor-pointer">
                <Link href="/Products">Productos</Link>
              </li>
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md hover:text-white cursor-pointer">
                <Link href="/Contact">Contacto</Link>
              </li>
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md hover:text-white cursor-pointer">
                <Link href="/TechnicalSupport">Soporte Técnico</Link>
              </li>
            </ul>
          </div>

          {/* Legal Menu */}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h4 className="mb-2 px-2 font-bold text-black">Legal</h4>
            <ul className="space-y-2 text-[#0b4a9b]">
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md hover:text-white cursor-pointer">
                <Link href="https://www.turnerlibros.com/wp-content/uploads/2021/02/ejemplo.pdf" target="_blank">
                  Términos y Condiciones
                </Link>
              </li>
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md hover:text-white cursor-pointer">
                <Link href="https://www.turnerlibros.com/wp-content/uploads/2021/02/ejemplo.pdf" target="_blank">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Menu */}
          <div className="mt-4 md:mt-0 text-center md:text-center">
            <h4 className="mb-2 px-2 font-bold text-black">Síguenos</h4>
            <ul className="space-y-2 text-[#0b4a9b]">
              <li className="flex justify-center md:justify-center items-center hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md hover:text-white cursor-pointer">
                <FaInstagram className="w-7 h-7"/>
              </li>
              <li className="flex justify-center md:justify-center items-center hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md hover:text-white cursor-pointer">
              <FaFacebook className="w-7 h-7"/>
              </li>
              <li className="flex justify-center md:justify-center items-center hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md hover:text-white cursor-pointer">
                <FaWhatsapp className="w-7 h-7"/>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="flex lg:flex-row flex-col justify-between items-center mt-8 text-[#0b4a9b] text-center text-xs">
          <div>© 2024 Hidraulica, Todos los derechos Reservados</div>
          <div className="flex items-center mt-2 lg:mt-0">
            <p className="mr-1 text-gray-500">Powered by</p>
            <p className="font-bold text-[#0b4a9b] text-xl">INNAVANTI</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

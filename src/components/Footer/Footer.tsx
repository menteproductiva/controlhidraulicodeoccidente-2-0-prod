import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center bg-[#F3F4F6] md:px-9 py-8 md:py-8">
      <div className="m-2 rounded-xl h-90">
        {/* Menus */}
        <div className="flex md:flex-row flex-col justify-around items-center md:items-start">
          {/* Left logo + description */}
          <div className="flex flex-col items-center w-full md:w-1/3 text-center md:text-left">
            <Image width={300} height={100} src="/assets/logo_3controlHidraulico.png" alt="Hidraulica" />
            <p className="mt-3 text-black text-sm">
              Empresa dedicada al área de Oleohidráulica. La mejor opción en cuanto al suministro y montaje de equipos hidráulicos.
            </p>
          </div>

          {/* Explore Menu */}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h4 className="mb-2 font-bold text-black">Explorar</h4>
            <ul className="space-y-2 text-[#0b4a9b]">
              <li className="hover:text-[#0b4a9b] cursor-pointer">
                <Link href="/AboutUs">Nosotros</Link>
              </li>
              <li className="hover:text-[#0b4a9b] cursor-pointer">
                <Link href="/Products">Productos</Link>
              </li>
              <li className="hover:text-[#0b4a9b] cursor-pointer">
                <Link href="/Contact">Servicios</Link>
              </li>
              <li className="hover:text-[#0b4a9b] cursor-pointer">
                <Link href="/TechnicalSupport">Soporte Técnico</Link>
              </li>
            </ul>
          </div>

          {/* Legal Menu */}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h4 className="mb-2 font-bold text-black">Legal</h4>
            <ul className="space-y-2 text-[#0b4a9b]">
              <li className="hover:text-[#0b4a9b] cursor-pointer">
                <Link href="https://www.turnerlibros.com/wp-content/uploads/2021/02/ejemplo.pdf" target="_blank">
                  Términos y Condiciones
                </Link>
              </li>
              <li className="hover:text-[#0b4a9b] cursor-pointer">
                <Link href="https://www.turnerlibros.com/wp-content/uploads/2021/02/ejemplo.pdf" target="_blank">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Menu */}
          <div className="mt-4 md:mt-0 text-center">
            <h4 className="mb-2 font-bold text-black">Síguenos</h4>
            <ul className="flex justify-center space-x-4">
              <li className="hover:text-[#0b4a9b] cursor-pointer">
                <div className="flex justify-center items-center border-gray-300 bg-white border rounded-full w-10 h-10">
                  <FaInstagram className="w-6 h-6 text-[#0b4a9b]" />
                </div>
              </li>
              <li className="hover:text-[#0b4a9b] cursor-pointer">
                <div className="flex justify-center items-center border-gray-300 bg-white border rounded-full w-10 h-10">
                  <FaFacebook className="w-6 h-6 text-[#0b4a9b]" />
                </div>
              </li>
              <li className="hover:text-[#0b4a9b] cursor-pointer">
                <div className="flex justify-center items-center border-gray-300 bg-white border rounded-full w-10 h-10">
                  <FaWhatsapp className="w-6 h-6 text-[#0b4a9b]" />
                </div>
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

import Image from "next/image";
import React from "react";
import { FacebookIcon, TwitterIcon } from "../Icons/Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2D3688] to-[#1A2056] py-12 text-white">
      <div className="mx-auto px-4 container">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="/logo-white.svg"
              alt="Control Hidráulico de Occidente"
              width={180}
              height={60}
            />
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
              <li>
                <Link
                  href="#productos"
                  className="hover:text-[#E5202D] transition duration-300"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-[#E5202D] transition duration-300"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E5202D] transition duration-300"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="hover:text-[#E5202D] transition duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="ml-1 text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="#"
              className="ml-1 text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <TwitterIcon />
            </Link>
          </div>
        </div>
        <div className="border-gray-700 mt-8 pt-8 border-t text-center">
          <p className="text-gray-400 text-sm">
             2024 Control Hidráulico de Occidente S.A. de C.V. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

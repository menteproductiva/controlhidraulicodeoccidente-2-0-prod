import Image from "next/image";
import React from "react";
import { FacebookIcon, TwitterIcon } from "../Icons/Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center bg-[#133e76] py-8">
      <div className="m-2 rounded-xl h-90">
        {/* Menus */}
        <div className="md:flex justify-around">
          {/* Left logo + button */}
          <div>
            <Image width={400} height={200} src="/assets/logo_controlHidraulico.png" alt="Hidrauilica"/>
          </div>
        

          {/* Menus */}
          <div className="md:py-0">
            <h4 className="mb-2 px-2 font-bold text-white">Explorar</h4>
            <ul className="text-white">
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md cursor-pointer">
                <Link href="#">
                  Nosotros
                </Link>
              </li>
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md cursor-pointer">
                <Link href="/Products">
                  Productos
                </Link>
              </li>
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md cursor-pointer">
                <Link href="/Contact">
                  Contacto
                </Link>
              </li>
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md cursor-pointer">
                <Link href="/TechnicalSupport">
                  Soporte Técnico
                </Link>
              </li>
            </ul>
          </div>

          <div className="py-5 md:py-0">
            <h4 className="mb-2 px-2 font-bold text-white">Legal</h4>
            <ul className="text-white">
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md cursor-pointer">
                <Link
                  href="https://www.turnerlibros.com/wp-content/uploads/2021/02/ejemplo.pdf"
                  target="_blank"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li className="hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md cursor-pointer">
                <Link
                  href="https://www.turnerlibros.com/wp-content/uploads/2021/02/ejemplo.pdf"
                  target="_blank"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div className="py-5 md:py-0">
            <h4 className="mb-2 px-2 font-bold text-white">Síguenos</h4>
            <ul className="text-white">
              <li className="flex flex-row items-center hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md cursor-pointer">
                {/* <InstagramIcon  className="mr-1"/> */}
                Instagram
              </li>
              <li className="flex flex-row items-center hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md cursor-pointer">
                {/* <FacebookIcon className="mr-1"/> */}
                Facebook
              </li>
              <li className="flex flex-row hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] px-2 py-2 border border-transparent rounded-md cursor-pointer">
              {/* <WhatsappIcon className="mr-1"/> */}
              Whatsapp
              </li>
            </ul>
          </div>
        </div>
        {/* below footer */}
        <div className="flex lg:flex lg:flex-row flex-col-reverse lg:justify-between items-center lg:items-end md:px-32 lg:px-12 text-white text-xs lg:text-white">
          <div>© 2024 Hidraulica, Todos los derechos Reservados</div>
          <div className="md:block flex flex-col items-center">
            <p>Powered by </p>{" "}
            <p className="font-bold text-xl tracking-tighter">INNAVANTI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

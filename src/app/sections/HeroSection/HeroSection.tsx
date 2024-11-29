import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

interface HeroSectionProps {
  id: string;
  title: string;
  description: string;
  primaryActionText: string;
  primaryActionLink: string;
  secondaryActionText?: string;
  secondaryActionLink?: string;
  imageSrc: string;
  imageAlt: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  id,
  title,
  description,
  primaryActionText,
  primaryActionLink,
  secondaryActionText,
  secondaryActionLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section id={id} className="bg-[#1A2056] pt-20 md:pt-32 text-white">
      <div className="mx-auto px-6 py-12 md:py-24 container">
        <div className="flex md:flex-row flex-col-reverse items-center md:space-x-12">
          {/* Contenido de texto */}
          <div className="mb-8 md:mb-0 w-full md:w-1/2 text-center md:text-left">
            <h1 className="mb-4 font-light font-montserrat text-3xl md:text-5xl leading-tight">
              {title}
            </h1>
            <p className="opacity-90 mb-6 text-lg md:text-xl">{description}</p>
            <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
              <Link
                href={primaryActionLink}
                className="inline-block bg-[#E5202D] hover:bg-[#C41D27] px-8 py-3 rounded-full w-full md:w-auto font-bold text-white transition duration-300"
              >
                {primaryActionText}
              </Link>

              {secondaryActionText && secondaryActionLink && (
                <Link
                  href={secondaryActionLink}
                  className="inline-block bg-white hover:bg-gray-100 px-8 py-3 rounded-full w-full md:w-auto font-bold text-[#2D3688] transition duration-300"
                >
                  {secondaryActionText}
                </Link>
              )}
            </div>

            {/* Redes Sociales */}
            <h2 className="mt-8 text-xl">Síguenos en nuestras redes sociales</h2>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <Link href="https://www.facebook.com/controlhidraulicodeo" aria-label="Facebook">
                <FaFacebook className="w-8 h-8 hover:text-[#C41D27] transition duration-300" />
              </Link>
              <Link href="https://www.instagram.com/controlhidraulicodeo" aria-label="Instagram">
                <FaInstagram className="w-8 h-8 hover:text-[#C41D27] transition duration-300" />
              </Link>
              <Link href="https://www.tiktok.com/@controlhidraulicodeo" aria-label="TikTok">
                <FaTiktok className="w-8 h-8 hover:text-[#C41D27] transition duration-300" />
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center md:justify-end mb-2 md:mb-0 w-full md:w-1/2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="shadow-xl rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

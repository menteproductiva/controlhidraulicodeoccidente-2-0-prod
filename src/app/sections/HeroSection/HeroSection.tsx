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
    <section id={id} className="bg-[#1A2056] pt-24 md:pt-32 text-white">
      <div className="mx-auto px-4 py-16 md:py-24 container">
        <div className="flex md:flex-row flex-col items-center">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="mb-4 font-light font-montserrat text-3xl md:text-5xl leading-tight">
              {title}
            </h1>
            <p className="opacity-90 mb-8 text-lg">{description}</p>
            <div className="md:space-x-4 space-y-4 md:space-y-0">
              <a
                href={primaryActionLink}
                className="inline-block bg-[#E5202D] hover:bg-[#C41D27] px-8 py-3 rounded-full w-full md:w-auto font-bold text-white transition duration-300"
              >
                {primaryActionText}
              </a>
             
              {secondaryActionText && secondaryActionLink && (
                <div>
                  <a
                    href={secondaryActionLink}
                    className="inline-block bg-white hover:bg-gray-100 px-8 py-3 rounded-full w-full md:w-auto font-bold text-[#2D3688] transition duration-300"
                  >
                    {secondaryActionText}
                  </a>
                </div>
              )}
            </div>
            <h2 className="md:mt-8 text-xl">Síguenos en nuestras redes sociales</h2>

            <div className="flex justify-stretch space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-3 rounded-full md:w-1/2 font-bold text-white">
                <Link href="https://www.facebook.com/controlhidraulicodeo">
                  <FaFacebook className="md:mr-2 w-8 h-8 hover:text-[#C41D27]"/>
                </Link>
                <Link href="https://www.facebook.com/controlhidraulicodeo">
                  <FaInstagram className="md:mr-2 w-8 h-8 hover:text-[#C41D27]"/>
                </Link>
                <Link href="https://www.facebook.com/controlhidraulicodeo">
                  <FaTiktok className="w-8 h-8 hover:text-[#C41D27]"/>
                </Link>
              </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="shadow-xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import React from "react";

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
    <section
      id={id}
      className="bg-[#1A2056] pt-24 md:pt-32 text-white"
    >
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
                <a
                  href={secondaryActionLink}
                  className="inline-block bg-white hover:bg-gray-100 px-8 py-3 rounded-full w-full md:w-auto font-bold text-[#2D3688] transition duration-300"
                >
                  {secondaryActionText}
                </a>
              )}
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

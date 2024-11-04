import AboutSection from "./sections/AboutSection/AboutSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ProductSection from "./sections/ProductSection/ProductSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import CallToAction from "./sections/CallToActionHome/CallToActionHome";
import { ImagesSlider } from "@/components/ui/images-slider";
import ButtonNeubrutalism from "@/components/ButtonNeubratalism/ButtonNeubrutalism";
import TestimonialSection from "./sections/TestimonialSection/TestimonialSection";
import ChavoyaBannerSection from "./sections/ChavoyaBannerSection/ChavoyaBannerSection";
import Image from "next/image";

const images = [
  "/assets/heroSlider/imgHero_1.jpg",
  "/assets/heroSlider/imgHero_2.jpg",
  "/assets/heroSlider/imgHero_3.jpg",
  "/assets/heroSlider/imgHero_4.jpg",
];

export default function Home() {
  return (
    <div>
      <ImagesSlider className="h-[45rem]" images={images}>
        <div className="z-50 flex flex-col justify-center items-center px-20 py-4 font-bold text-neutral-50">
          {/* SOLUCIONES HIDRÁULICAS DE ALTO RENDIMIENTO  */}
          {/* PARA IMPULSAR TUS PROYECTOS
          INDUSTRIALES */}
          {/* <Image
            rel="preload"
            loading="lazy"
            src="/assets/HERO_NAME.png"
            alt="hero_name"
            width={800}
            height={800}
            fetchPriority="high"
          /> */}
          <svg viewBox="0 0 4000 1000" width="40rem" xmlns="http://www.w3.org/2000/svg" className="border-2 border-red-500 w-full">
            <text x="20" y="300" style={{color: "#ffff"}} fill="#ffff"  fontSize="9.2rem">
              SOLUCIONES HIDRÁULICAS DE ALTO RENDIMIENTO
            </text>
          </svg>
          <ButtonNeubrutalism
            url="#Contact"
            textColor="white"
            colorHover="white"
          >
            Conócenos
          </ButtonNeubrutalism>
        </div>
      </ImagesSlider>
      <CallToAction />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <TestimonialSection />
      <div>
        <ChavoyaBannerSection />
      </div>
      <ContactSection />
    </div>
  );
}

const ComponentHero = () => {
  return <></>;
};

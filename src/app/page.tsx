import AboutSection from "./sections/AboutSection/AboutSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ProductSection from "./sections/ProductSection/ProductSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import CallToAction from "./sections/CallToActionHome/CallToActionHome";
import { ImagesSlider } from "@/components/ui/images-slider";
import ButtonNeubrutalism from "@/components/ButtonNeubratalism/ButtonNeubrutalism";
import Link from "next/link";
import DistributeBrandsHomeSection from "./sections/DistributeBrandsHomeSection/DistributeBrandsHomeSection";
import TestimonialsHomeSection from "./sections/TestimonialsHomeSection/TestimonialsHomeSection";
import { BannerHomeSection } from "./sections/BannerHomeSection/BannerHomeSection";
import TestimonialSection from "./sections/TestimonialSection/TestimonialSection";
import ChavoyaBannerSection from "./sections/ChavoyaBannerSection/ChavoyaBannerSection";

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
        <div className="z-50 flex flex-col justify-center items-center px-20">
          <p className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 px-8 py-4 font-bold text-center text-transparent text-xl lg:text-4xl/tight 2xl:text-6xl/tight">
            SOLUCIONES HIDRÁULICAS DE ALTO RENDIMIENTO PARA IMPULSAR TUS
            PROYECTOS INDUSTRIALES
          </p>
          <Link href="#Contact">
            <ButtonNeubrutalism textColor="white" colorHover="white">
              Conócenos
            </ButtonNeubrutalism>
          </Link>
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

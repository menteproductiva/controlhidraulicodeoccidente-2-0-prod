import AboutSection from "./sections/AboutSection/AboutSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ProductSection from "./sections/ProductSection/ProductSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import CallToAction from "./sections/CallToActionHome/CallToActionHome";
import { ImagesSlider } from "@/components/ui/images-slider";
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
        <div className="z-50 flex flex-col justify-center items-center px-20 py-4 font-bold text-neutral-50">
        </div>
      </ImagesSlider>
      <CallToAction />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <TestimonialSection />
      <div >
        <ChavoyaBannerSection />
      </div>
      <ContactSection />
    </div>
  );
}

const ComponentHero = () => {
  return <></>;
};

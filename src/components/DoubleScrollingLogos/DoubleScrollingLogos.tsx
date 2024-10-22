import { motion } from "framer-motion";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";
import { IconType } from "react-icons";
import Image from "next/image";


const data_top = [
    '/assets/logos/logoDistribuidor_1.png',
    '/assets/logos/logoDistribuidor_2.png',
    '/assets/logos/logoDistribuidor_3.png',
    '/assets/logos/logoDistribuidor_4.png',
    '/assets/logos/logoDistribuidor_5.png',
    '/assets/logos/logoDistribuidor_6.png',
    '/assets/logos/logoDistribuidor_7.png',
    '/assets/logos/logoDistribuidor_8.png',
    '/assets/logos/logoDistribuidor_9.png',
    '/assets/logos/logoDistribuidor_10.png'
]

const data_bottom = [
    '/assets/logos/logoDistribuidor_11.png',
    '/assets/logos/logoDistribuidor_12.png',
    '/assets/logos/logoDistribuidor_13.png',
    '/assets/logos/logoDistribuidor_14.png',
    '/assets/logos/logoDistribuidor_15.png',
    '/assets/logos/logoDistribuidor_16.png',
    '/assets/logos/logoDistribuidor_17.png',
    '/assets/logos/logoDistribuidor_18.png',
    '/assets/logos/logoDistribuidor_19.png',
    '/assets/logos/logoDistribuidor_20.png'
]

const DoubleScrollingLogos = () => {
  return (
    <section className="bg-white py-4">
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop data={data_top}/>
        </TranslateWrapper>
        <TranslateWrapper >
          <LogoItemsTop data={data_top}/>
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop data={data_top}/>
        </TranslateWrapper>
      </div>
      <div className="flex mt-4 overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom data={data_bottom} />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom data={data_bottom}/>
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom data={data_bottom}/>
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ url }: { url: string }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="flex justify-center items-center hover:bg-slate-200 w-16 md:w-24 h-16 md:h-24 text-black transition-colors"
    >
      {/* <Icon className="text-4xl md:text-5xl" /> */}
     <Image src={`${url}`} alt="logo" width={100} height={100}/>
    </a>
  );
};

const LogoItemsTop = ({data}: {data: any}) => (
  <>
  {data.map((item:any,key:number) => (
           <LogoItem key={key} url={item} />
  ))}
 
  </>
);

const LogoItemsBottom = ({data}: {data:any}) => (
  <>
   {data.map((item:any,key:number) => (
           <LogoItem key={key} url={item} />
  ))}
  </>
);

export default DoubleScrollingLogos;
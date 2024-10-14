import { motion, AnimatePresence } from "framer-motion";
// settings
import { transitions } from "@/lib/transitions";

interface Data {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export interface ITestimonialProps {
  data: Data;
  previous?: Function;
  next?: Function;
  isVisible?: Boolean;
  variants: string;
}

function Testimonial({
  data,
  previous = () => {},
  next = () => {},
  isVisible = true,
  variants,
}: ITestimonialProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={String(Math.random())}
          variants={transitions[variants]}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <article
            className={
              'mt-8 overflow-auto bg-[url("/images/pattern-bg.svg")] bg-[length:87%] bg-[center_top_1.6rem] bg-no-repeat md:relative md:isolate md:mt-0 md:flex md:h-full md:w-full md:items-center md:justify-start md:bg-[length:48%] md:bg-testimonial'
            }
          >
            <h1 className="sr-only">Testimonial</h1>
            <div className="relative md:top-[48%] md:right-[11.5%] md:-z-[1] md:absolute mx-auto mt-14 md:mt-0 w-[67.5%] md:w-auto md:h-[67.5%] md:-translate-y-1/2 aspect-square">
              <img
                alt={data.name}
                aria-hidden="true"
                src={data.image}
                className="shadow-xl rounded-lg max-w-full max-h-full object-cover"
              />
              <div className="absolute -bottom-[6%] left-0 right-0 mx-auto flex h-[2.5rem] w-[5rem] overflow-hidden rounded-full border-[1px] border-grayishBlue/50 bg-white shadow-xl hover:border-grayishBlue sm:h-[11%] sm:w-[21%] md:left-[11.5%] md:right-auto [&>button]:flex [&>button]:basis-1/2 [&>button]:items-center [&>button]:justify-center [&>button]:bg-white [&>button]:transition-all [&>button]:duration-500 hover:[&>button]:shadow-xl hover:[&>button]:brightness-75">
                <button aria-label="Previous Slide" onClick={() => previous()}>
                  <img
                    src="images/icon-prev.svg"
                    alt="Previous"
                    aria-hidden="true"
                    className="h-[0.8rem] sm:h-auto md:h-[0.8rem] lg:h-auto"
                  />
                </button>
                <button aria-label="Next Slide" onClick={() => next()}>
                  <img
                    src="images/icon-next.svg"
                    alt="Next"
                    aria-hidden="true"
                    className="h-[0.8rem] sm:h-auto md:h-[0.8rem] lg:h-auto"
                  />
                </button>
              </div>
            </div>
            <div className="md:bg-[left_18%_top] bg-[url('/images/pattern-quotes.svg')] bg-[length:19%] bg-no-repeat bg-top mx-auto mt-14 md:mt-0 md:ml-[11.5%] pt-6 md:pt-[4%] w-[86%] md:w-[45%] md:h-[45%] text-black text-center text-lg md:text-left md:text-[0.65rem] lg:text-[0.79rem] xl:text-base leading-6 lg:overflow-auto">
              <q className="md:text-[2em] xl:leading-[2.725rem]">
                &nbsp;{data.testimonial}&nbsp;
              </q>
              <div className="md:flex gap-2 mt-4 md:mt-10 text-base md:text-[1.25em]">
                <p className="font-bold">{data.name}</p>
                <p className="text-black">{data.role}</p>
              </div>
            </div>
          </article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Testimonial;
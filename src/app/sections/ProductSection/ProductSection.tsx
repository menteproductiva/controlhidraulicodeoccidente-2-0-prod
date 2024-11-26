'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import DistributeBrandsHomeSection from '../DistributeBrandsHomeSection/DistributeBrandsHomeSection';
import Image from 'next/image';

const ProductSection = () => {
  const x = useSpring(0.5);
  const y = useSpring(0.5);

  useEffect(() => {
    x.set(1);
  }, []);

  return (
    <section id='productos' className='bg-white py-16 md:py-16'>
      <div className='mx-auto px-4 container'>
        <div className='flex flex-row justify-between items-center align-middle'>
          <h2 className='mb-5 font-light font-montserrat text-[#E5202D] text-3xl text-center md:text-4xl'>
            Nuestras Marcas Destacadas
          </h2>
        </div>
        <div className='flex flex-row justify-end items-end md:mb-4 align-middle'>
          <div className='flex flex-row justify-center items-end'>
            <Link href='/Products'>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: '#E5202D',
                }}
                transition={{ duration: 0.5, yoyo: Infinity }}
                style={{
                  padding: '12px 25px',
                  outline: 'none',
                  backgroundColor: '#2D3688',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                }}
              >
                Ir a Productos
              </motion.button>
            </Link>
          </div>
        </div>

        <div className='flex flex-col items-center w-full'>
          <div className='flex flex-row justify-center items-start w-full'>
            {[
              '/assets/logos/logoDistribuidor_9.png',
              '/assets/logos/logoDistribuidor_5.png',
              '/assets/logos/logoDistribuidor_15.png',
              // '/assets/logos/marcaDestacada_ATOS.png',
              // '/assets/logos/marcaDestacada_REXROTH.png',
            ].map((item, key) => (
              <Image
                key={key}
                src={item}
                alt='ImageBrand'
                width={300}
                height={300}
              />
            ))}
          </div>
          <DistributeBrandsHomeSection />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

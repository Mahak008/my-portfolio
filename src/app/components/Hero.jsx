"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h[400px] relative'>
            <Image src='/images/hero-image.png' alt='hero-img' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300} />
          </div>
        </div>

        <div className='col-span-8 place-self-center text-center sm:text-right justify-self-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            Hello, I am Mahak Garg
          </h1>

          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            "Tech-savvy beginner passionate about coding, innovation, and technology."
          </p>

          <div>
            <Link href="/#contact" className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white'>
              Hire Me
            </Link>

            <Link href='/' className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

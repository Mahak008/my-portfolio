import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h[400px] relative'>
            <Image src='/images/hero-image.png' alt='hero-img' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300} />
          </div>
        </div>

        <div className='col-span-7 place-self-center text-right'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            Hello, I am Mahak Garg
          </h1>

          <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
            "Tech-savvy beginner passionate about coding, innovation, and technology."
          </p>

          <div>
            <button>Hire Me</button>
            <button>Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

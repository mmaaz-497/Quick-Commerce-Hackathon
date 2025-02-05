
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const FoodQuality = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-">
      {/* Text Content */}
      <div className='w-full md:w-1/2 lg:max-w-[472px] mb-8 md:mb-0 md:mr-4 text-center md:text-left ml-0 md:ml-[300px]'>
        <h1 className='text-[#FF9F0D] text-lg md:text-xl lg:text-2xl mb-2 lg:mb-4'>
          Its Quick & Amusing!
        </h1>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6'>
          The Art of Speed Food Quality
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-white mb-6 lg:mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
        </p>
        <div className='flex justify-center md:justify-start'>
          <Link href={'/Menu'}>
            <button className='w-full md:w-auto px-8 py-4 bg-[#FF9F0D] text-white rounded-full hover:bg-orange-600 transition-colors duration-300 text-lg'>
              See Menu
            </button>
          </Link>
        </div>
      </div>

      {/* Image Container */}
      <div className='w-full md:w-1/2 relative mt-8 md:mt-0 flex justify-center'>
        <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-64 md:h-96 lg:h-[500px]'>
          <Image
            src={'/images/egg.png'}
            alt='Food quality illustration'
            layout='fill'
            objectFit='contain'
            className='hover:scale-105 transition-transform duration-300'
          />
        </div>
      </div>
    </div>
  )
}

export default FoodQuality

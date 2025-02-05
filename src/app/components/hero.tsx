
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='w-full px-4 lg:px-0 mt-[100px] lg:mt-[750px]'>
      {/* Food Category Section */}
      <div className='max-w-[1320px] mx-auto text-center mt-10 lg:mt-[130px]'>
        <h1 className='text-[#FF9F0D] text-lg lg:text-xl font-normal mb-2'>Food Category</h1>
        <h1 className='text-2xl lg:text-4xl font-bold mb-5'>Choose Food Item</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <Image src={'/images/foodItem1.png'} alt='photo' width={305} height={328} className='w-full'/>
          <Image src={'/images/foodItem2.png'} alt='photo' width={306} height={329} className='w-full'/>
          <Image src={'/images/foodItem3.png'} alt='photo' width={306} height={329} className='w-full'/>
          <Image src={'/images/foodItem4.png'} alt='photo' width={306} height={329} className='w-full'/>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='max-w-[1320px] mx-auto mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
        <div className='grid grid-cols-2 gap-5'>
          <Image src={'/images/extra1.png'} alt='photo' width={362} height={356} className='w-full'/>
          <Image src={'/images/extra2.png'} alt='photo' width={281} height={231} className='w-full mt-10'/>
          <Image src={'/images/extra3.png'} alt='photo' width={244} height={306} className='w-full'/>
          <Image src={'/images/extra4.png'} alt='photo' width={221} height={226} className='w-full'/>
          <Image src={'/images/extra5.png'} alt='photo' width={161} height={168} className='w-full'/>
          <Image src={'/images/extra6.png'} alt='photo' width={161} height={166} className='w-full'/>
        </div>
        <div className='text-center lg:text-left'>
          <h1 className='text-[#FF9F0D] text-lg font-normal'>Why Choose Us</h1>
          <h1 className='text-2xl lg:text-4xl font-bold mt-2'>Extraordinary taste and Experienced</h1>
          <p className='text-sm lg:text-base mt-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna elit augue urna vitae
            feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus.
          </p>
          <div className='flex justify-center lg:justify-start gap-4 mt-6'>
            <div className='w-[102px] h-[100px] bg-[#FF9F0D] flex items-center justify-center'>
              <Image src={'/images/extra7.png'} alt='photo' width={56} height={56} />
            </div>
            <div className='w-[102px] h-[100px] bg-[#FF9F0D] flex items-center justify-center'>
              <Image src={'/images/extra8.png'} alt='photo' width={56} height={56} />
            </div>
            <div className='w-[102px] h-[100px] bg-[#FF9F0D] flex items-center justify-center'>
              <Image src={'/images/extra9.png'} alt='photo' width={56} height={56} />
            </div>
          </div>
          <div className='mt-6'>
            <Image src={'/images/extra10.png'} alt='photo' width={374} height={93} className='mx-auto lg:mx-0'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

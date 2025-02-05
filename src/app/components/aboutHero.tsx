
import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className="bg-[#E0E0E0] text-black flex flex-col items-center py-10 px-4 md:px-16">
      {/* Container */}
      <div className="max-w-[1320px] w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4">
            <Image src="/images/pagesPic1.png" alt="photo" width={336} height={536} className="w-full md:w-[336px] h-auto" />
          </div>
          <div className="flex flex-col gap-4">
            <Image src="/images/pagesPic2.png" alt="photo" width={309} height={271} className="w-full md:w-[309px] h-auto" />
            <Image src="/images/pagesPic3.png" alt="photo" width={309} height={382} className="w-full md:w-[309px] h-auto" />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-[526px]">
          <p className="text-[#FF9F0D] text-lg font-normal">About us</p>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mt-4">
            Food is an important part of a balanced Diet
          </h2>
          <p className="text-sm md:text-base leading-6 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum Urna elit augue urna vitae feugiat pretium donec id elementum Ultrices mattis vitae mus risus Lacus nisi et ac dapibus sit eu velit in consequat.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Image src="/images/pagesButton.png" alt="photo" width={379} height={60} className="w-full md:w-[379px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutHero;
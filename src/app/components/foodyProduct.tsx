
import React from 'react';
import Image from 'next/image';

const FoodyProduct = () => {
  return (
    <div>
      <div className="relative w-full lg:w-[1320px] h-auto lg:h-[562px] lg:absolute lg:top-[1070px] lg:left-[300px] px-4 lg:px-0">
        {/* First Image */}
        <div className="relative mx-auto lg:absolute lg:top-0 lg:left-[660px] flex justify-center">
          <Image
            src={'/images/Egg2.png'}
            alt="photo"
            width={660}
            height={330}
            className="w-full lg:w-[660px] h-auto"
          />
        </div>

        {/* Second Image */}
        <div className="relative mx-auto lg:absolute lg:top-[350px] lg:left-[660px] flex justify-center mt-4 lg:mt-0">
          <Image
            src={'/images/Roll.png'}
            alt="photo"
            width={322}
            height={194}
            className="w-[70%] lg:w-[322px] h-auto"
          />
        </div>

        {/* Third Image */}
        <div className="relative mx-auto lg:absolute lg:top-[350px] lg:left-[1000px] flex justify-center mt-4 lg:mt-0">
          <Image
            src={'/images/sendWich.png'}
            alt="photo"
            width={322}
            height={194}
            className="w-[70%] lg:w-[322px] h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[562px] h-auto text-center lg:text-left mt-8 lg:mt-0 mx-auto lg:mx-0">
          <h1 className="w-auto h-auto font-normal text-sm lg:text-base leading-6">
            About us
          </h1>
          <h1 className="w-auto h-auto font-bold text-2xl lg:text-[48px] leading-8 lg:leading-[56px] mt-2 mb-4">
            We Create the best foody product
          </h1>
          <p className="w-auto h-auto font-normal text-sm lg:text-base leading-5 lg:leading-6 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum Urna elit
            augue urna vitae feugiat pretium donec id elementum Ultrices mattis
            sed vitae mus risus Lacus nisi et ac dapibus sit eu velit in
            consequat
          </p>
          <p className="w-auto h-auto font-normal text-sm lg:text-base leading-5 lg:leading-6 mt-2">
            Lacus nisi et ac dapibus sit eu velit in consequat
          </p>
          <p className="w-auto h-auto font-normal text-sm lg:text-base leading-5 lg:leading-6 mt-2">
            Quisque diam pellentesque bibendum non dui volutpat fringilla
          </p>
          <p className="w-auto h-auto font-normal text-sm lg:text-base leading-5 lg:leading-6 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </p>
          <div className="w-[190px] h-[60px] bg-[#FF9F0D] rounded-3xl py-3 px-6 text-center text-white text-sm lg:text-base font-medium mt-8 lg:mt-10 mx-auto lg:mx-0 cursor-pointer hover:bg-[#e58e0a]">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodyProduct;


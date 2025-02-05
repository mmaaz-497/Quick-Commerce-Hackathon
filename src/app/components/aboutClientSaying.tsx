import React from 'react';
import Image from 'next/image';

const AboutClientSaying = () => {
  return (
    <div className="bg-white text-black flex flex-col items-center px-4 md:px-16 py-10">
      {/* Header Section */}
      <div className="text-center">
        <p className="text-xl md:text-2xl text-[#FF9F0D] font-semibold">Testimonials</p>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">What our clients are saying</h2>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-[697px] w-full flex flex-col items-center mt-10 p-6 md:p-10 border border-gray-200 shadow-lg rounded-lg">
        {/* Client Image */}
        <Image
          src="/images/myPic.jpg"
          alt="Client photo"
          width={133}
          height={134}
          className="w-[100px] md:w-[133px] h-auto rounded-full"
        />

        {/* Client Review */}
        <p className="text-sm md:text-base text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel ratione quos quaerat nisi dolor et. Dolorum voluptatem rerum tenetur.
        </p>

        {/* Stars */}
        <Image
          src="/images/clientSayingStars.png"
          alt="Rating stars"
          width={152}
          height={24}
          className="w-[120px] md:w-[152px] h-auto mt-4"
        />

        {/* Client Name */}
        <h5 className="text-lg md:text-2xl font-bold mt-4">M Maaz</h5>
        <p className="text-sm md:text-base text-gray-600">Food Specialist</p>

        {/* Navigation Dots */}
        <Image
          src="/images/clientSayingDots.png"
          alt="Navigation dots"
          width={86}
          height={16}
          className="w-[60px] md:w-[86px] h-auto mt-6"
        />
      </div>
    </div>
  );
};

export default AboutClientSaying;

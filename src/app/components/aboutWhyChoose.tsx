
import React from 'react';
import Image from 'next/image';

const AboutWhyChoose = () => {
  return (
    <div className="bg-white text-black flex flex-col items-center px-4 md:px-16 py-10">
      {/* Header Section */}
      <div className="text-center max-w-[579px]">
        <h2 className="text-2xl md:text-4xl font-bold">Why Choose Us</h2>
        <p className="text-sm md:text-base mt-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[1320px] mt-10">
        <Image
          src="/images/pagesWhyChoosePic.png"
          alt="photo"
          width={1320}
          height={386}
          className="w-full h-auto"
        />
      </div>

      {/* Features Section */}
      <div className="w-full max-w-[1320px] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mt-10">
        {/* Best Chef */}
        <div className="flex flex-col items-center text-center max-w-[359px]">
          <Image src="/images/pagesWhyChooseStudentPic.png" alt="photo" width={80} height={80} className="w-[80px] h-[80px] mb-4" />
          <h5 className="text-xl md:text-2xl font-bold">Best Chef</h5>
          <p className="text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat.
          </p>
        </div>

        {/* 120 Item Food */}
        <div className="flex flex-col items-center text-center max-w-[359px]">
          <Image src="/images/pagesWhyChooseCoffeePic.png" alt="photo" width={80} height={80} className="w-[80px] h-[80px] mb-4" />
          <h5 className="text-xl md:text-2xl font-bold">120 Item Food</h5>
          <p className="text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat.
          </p>
        </div>

        {/* Clean Environment */}
        <div className="flex flex-col items-center text-center max-w-[359px]">
          <Image src="/images/pagesWhyChoosePersonPic.png" alt="photo" width={80} height={80} className="w-[80px] h-[80px] mb-4" />
          <h5 className="text-xl md:text-2xl font-bold">Clean Environment</h5>
          <p className="text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat.
          </p>
        </div>
      </div>

      {/* Team Image Section */}
      <div className="w-full mt-10">
        <Image
          src="/images/pagesWhyChooseTeamMemberPic.png"
          alt="photo"
          width={1920}
          height={686}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutWhyChoose;
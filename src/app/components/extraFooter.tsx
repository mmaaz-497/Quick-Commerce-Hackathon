import React from 'react';
import Image from 'next/image';

const ExtraFooter = () => {
  return (
    <div className="relative w-full flex flex-col items-center px-4">
      {/* Extra Footer Image */}
      <div className="w-full max-w-[1320px] mt-[100px]">
        <Image 
          src="/images/extraFooter.png" 
          alt="Extra Footer" 
          width={1320} 
          height={467} 
          className="w-full h-auto"
        />
      </div>

      {/* Our Menu Image */}
      <div className="w-full max-w-[1320px] mt-[100px] ">
        <Image 
          src="/images/ourMenu.png" 
          alt="Our Menu" 
          width={1320} 
          height={656} 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ExtraFooter;

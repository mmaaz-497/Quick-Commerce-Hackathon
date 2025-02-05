import React from 'react';
import Image from 'next/image';

const ClientSaying = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* First Image */}
      <div className="w-full max-w-[1273px] flex justify-center">
        <Image
          src={'/images/clientSaying.png'}
          alt="Client Testimonials"
          width={1273}
          height={770}
          className="w-full h-auto"
        />
      </div>

      {/* Second Image */}
      <div className="w-full max-w-[1320px] flex justify-center mt-6">
        <Image
          src={'/images/client2.png'}
          alt="More Client Feedback"
          width={1320}
          height={558}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ClientSaying;

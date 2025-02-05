import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className="relative">
      <div
        id="blogPic"
        className="absolute left-0 top-0 md:left-[300px] md:top-[50px] w-full md:w-auto h-[500px]"
      >
        <Image
          src="/images/blogPic.png"
          alt="photo"
          layout="responsive"
          width={1320}
          height={732}
        />
      </div>
    </div>
  );
};

export default Blog;

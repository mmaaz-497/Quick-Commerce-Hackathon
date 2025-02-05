

import React from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

async function OurChef() {
  const query = `*[_type == 'chef'] | order(_createdAt asc) {
    _id,
    name,
    position,
    experience,
    specialty,
    "imageUrl": image.asset->url,
    description,
    available
  }`;

  const data = await client.fetch(query);
  console.log(data);

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {data.map((chef: any) => (
          <div key={chef._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
            <div className="w-full h-auto">
              <Image
                className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-80 mb-4"
                src={chef.imageUrl}
                alt={chef.name}
                width={300}
                height={300}
              />
            </div>
            <h1 className="text-lg font-bold">{chef.name}</h1>
            <p className="text-sm text-gray-600">Position: {chef.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurChef;
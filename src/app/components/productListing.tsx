

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductListing = ({ product }: { product: Product }) => {
  return (
    
    <div>
    <div className="my-8 mx-4 md:mx-[100px] ">
      
      <div className="w-full md:w-[600px] h-full">
        
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
            className=" h-48 object-cover mb-4 border p-4 rounded-lg shadow hover:shadow-lg transition"
          />
        

        <h3 className="text-lg font-semibold">{product.name}</h3>

        {/* Price section */}
        <p className="text-gray-500 line-through text-sm sm:text-base">${product.originalPrice}</p>
        <p className="text-green-600 font-bold text-xl sm:text-2xl mb-4">
          price: ${product.price}
        </p><span><Link className="text-blue-800 border rounded-lg border-white px-2 py-2" href={`/product/${product.slug}`}>View Details</Link></span>
      </div>
    </div>
    </div>
  );
};

export default ProductListing;

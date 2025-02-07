'use client';

import Image from 'next/image';
import Link from 'next/link';
import MenuNavebar from './2Navebar';
import Product from '@/type';

const ProductDetails = ({ product }: { product: Product }) => {
  const handleClick = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    if (cart[product.name]) {
      cart[product.name].quantity += 1;
    } else {
      cart[product.name] = { ...product, quantity: 1 };
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Shop Details', href: '' },
  ];

  return (
    <div>
      <MenuNavebar title="Shop Details" breadcrumbs={breadcrumbs} />
      <div className="w-full bg-white p-4">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover w-full md:w-1/2 h-auto rounded mb-6 md:mb-0"
          />
          <div className="flex-1 text-center md:text-left">
            <p
              className={`text-white text-lg font-semibold rounded-lg py-2 px-4 ${product.stockLevel > 0 ? 'bg-green-500' : 'bg-red-500 text-center'}`}
            >
              {product.stockLevel > 0 ? 'In Stock' : 'Out of Stock'}
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-black mt-4">{product.name}</h1>
            <p className="text-gray-700 mt-2 text-sm md:text-base">{product.description}</p>

            <p className="text-green-600 text-xl md:text-3xl font-bold mt-4">
              Price: ${product.originalPrice}
            </p>

            <p className="text-gray-700 text-sm mt-2">Category: {product.category}</p>
            <p className="text-gray-700 text-sm mt-2">Tags: {product.tags}</p>

            <Link href="/cart">
              <button
                onClick={() => handleClick(product)}
                className="border mt-4 px-6 md:px-8 py-2 bg-yellow-500 text-white text-sm md:text-base rounded-lg hover:bg-yellow-600 transition"
              >
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

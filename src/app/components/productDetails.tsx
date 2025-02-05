'use client';
import Image from 'next/image';
import Link from 'next/link';
import MenuNavebar from './2Navebar';
export function Page (){
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Shop Details", href: "" },
  ];

  return (
    <div>
      <MenuNavebar title="Shop Details" breadcrumbs={breadcrumbs} />
    </div>
  );
}


const ProductDetails = ({ product }: { product: Product }) => {
  

  const handleClick = (product: Product) => {
    // Parse the current cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');

    // If the product already exists in the cart, update the quantity
    if (cart[product.name]) {
      cart[product.name].quantity += 1;  // Correctly increment quantity by 1
    } else {
      // If the product doesn't exist in the cart, add it with quantity 1
      cart[product.name] = { ...product, quantity: 1 };
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Shop Details", href: "" },
  ];

  return (
    <div>
      <MenuNavebar title="Shop Details" breadcrumbs={breadcrumbs} />
      <div className='w-[1920px] bg-white'>
      <div className="flex flex-col md:flex-row gap-8 p-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className=" object-cover w-[700px] md:w-1/2 h-auto rounded ml-8 mb-[100px] mt-[100px]"
        />
        <div className="flex-1">
        <p
            className={`mt-2 ${product.stockLevel > 0 ? 'text-green-500' : 'text-red-500'} border rounded-lg bg-yellow-500 text-center text-white mt-[100px] w-[750px] md:w-full` }
          >
            {product.stockLevel > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
          <h1 className="text-[80px] text-black font-bold ">{product.name}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
          
          <p className="text-green-600 text-3xl font-bold mt-4">
            Price: ${product.originalPrice}
          </p>
         
          <p className='text-gray-700 text-sm mt-2'>Category: {product.category}</p>
          <p className='text-gray-700 text-sm mt-2'>Tag: {product.tags}</p>
          <p className='text-sm text-gray-700 mt-2'>Dictum/curcus/rises</p>
         
          <Link href={'/cart'}>
            <button
              onClick={() => handleClick(product)}
              className="border  mt-4 px-8 py-2 bg-yellow-500 text-white">
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
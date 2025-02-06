// // // // import ProductDetails from '@/app/components/productDetails';
// // // // import { client } from '@/sanity/lib/client';
// // // // import Product from '@/type';
// // // // import React from 'react';

// // // // async function getProduct(slug: string): Promise<Product | null> {
// // // //   const query = `*[_type == 'food' && slug.current == "${slug}"] | order(_createdAt asc) {
// // // //     _id,
// // // //     name,
// // // //     category,
// // // //     originalPrice,
// // // //     "discountPrice": price,  // Assuming the discount price is stored in 'price'
// // // //     tags,
// // // //     "slug": slug.current,
// // // //     "imageUrl": image.asset->url,
// // // //     description,
// // // //     available
// // // //   }`;

// // // //   // Fetch data from Sanity
// // // //   const products = await client.fetch(query);
// // // //   return products.length > 0 ? products[0] : null;  // Return product if found, otherwise null
// // // // }

// // // // const ProductDetail = async ({ params }: { params: { slug: string } }) => {
// // // //   const product = await getProduct(params.slug);

// // // //   if (!product) {
// // // //     return (
// // // //       <div className="text-center py-10">
// // // //         <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
// // // //         <p className="text-gray-600">The product you are looking for does not exist or is currently unavailable.</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div>
// // // //       {/* Render the product details for the fetched product */}
// // // //       <ProductDetails product={product} key={product._id} />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductDetail;







// import ProductDetails from '@/app/components/productDetails';
// import { client } from '@/sanity/lib/client';
// import Product from '@/type';
// import { notFound } from 'next/navigation';

// // Fetch the product from Sanity by slug
// async function getProduct(slug: string): Promise<Product | null> {
//   const query = `*[_type == 'food' && slug.current == "${slug}"] | order(_createdAt asc) {
//     _id,
//     name,
//     category,
//     originalPrice,
//     "discountPrice": price,
//     tags,
//     "slug": slug.current,
//     "imageUrl": image.asset->url,
//     description,
//     available
//   }`;

//   const products = await client.fetch(query);
//   return products.length > 0 ? products[0] : null; // Return the product if found, otherwise null
// }

// // Define the correct type for the props of this page component
// interface ProductDetailPageProps {
//   params: { slug: string };  // Ensure this matches the dynamic route's parameter type
// }

// // The main page component for the product details page
// const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
//   const product = await getProduct(params.slug);

//   // If no product is found, render a 404 page
//   if (!product) {
//     return notFound();  // Show 404 if product is not found
//   }

//   return (
//     <div>
//       {/* Render the product details for the fetched product */}
//       <ProductDetails product={product} key={product._id} />
//     </div>
//   );
// }
// export default ProductDetailPage;


import { notFound } from 'next/navigation';
import ProductDetails from '@/app/components/productDetails';
import { client } from '@/sanity/lib/client';
import Product from '@/type';

// ✅ Define correct `PageProps`
interface PageProps {
  params: { slug: string }; // ✅ Ensure `params` is `{ slug: string }` (not a Promise)
}

// ✅ Fetch product from Sanity
async function getProduct(slug: string): Promise<Product | null> {
  const query = `*[_type == 'food' && slug.current == "${slug}"] {
    _id,
    name,
    category,
    originalPrice,
    "discountPrice": price,
    tags,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    description,
    available
  }`;

  const products: Product[] = await client.fetch(query);
  return products.length > 0 ? products[0] : null;
}

// ✅ Fix TypeScript Error: Ensure `params` is properly destructured
const ProductDetailPage = async ({ params }: PageProps) => {
  if (!params?.slug) return notFound(); // ✅ Ensure slug exists

  const product = await getProduct(params.slug);
  if (!product) return notFound();

  return (
    <div>
      <ProductDetails product={product} key={product._id} />
    </div>
  );
};

export default ProductDetailPage;

// ✅ Fix `generateStaticParams` to correctly return an array of `{ slug: string }`
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const query = '*[_type == "food"] { "slug": slug.current }';
  const products: { slug: string }[] = await client.fetch(query);
  
  return products.map((product) => ({
    slug: product.slug,
  }));
}


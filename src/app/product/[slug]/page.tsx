

import ProductDetails from '@/app/components/productDetails';
import { client } from '@/sanity/lib/client';
import React from 'react';

async function getProduct(slug: string): Promise<Product | null> {
  const query = `*[_type == 'food' && slug.current == "${slug}"] | order(_createdAt asc) {
    _id,
    name,
    category,
    originalPrice,
    "discountPrice": price,  // Assuming the discount price is stored in 'price'
    tags,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    description,
    available
  }`;

  // Fetch data from Sanity
  const products = await client.fetch(query);
  return products.length > 0 ? products[0] : null;  // Return product if found, otherwise null
}

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const product = await getProduct(params.slug);

  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <p className="text-gray-600">The product you are looking for does not exist or is currently unavailable.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Render the product details for the fetched product */}
      <ProductDetails product={product} key={product._id} />
    </div>
  );
};

export default ProductDetail;

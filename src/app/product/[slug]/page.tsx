
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import ProductDetails from '@/app/components/productDetails';
import Product from '@/type';  // Ensure the Product type is defined correctly


// Function to fetch product by slug
async function getProduct(slug: string): Promise<Product | null> {
  const query = `*[_type == 'food' && slug.current == "${slug}"] | order(_createdAt asc) {
    _id,
    name,
    category,
    originalPrice,
    "discountPrice": price,
    tags,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    description,
    available,
    stockLevel
  }`;

  const products = await client.fetch(query);
  return products.length > 0 ? products[0] : null;
}

// Component for fetching and displaying product details
const ProductDetailPage = () => {
  const { slug } = useParams();  // Extract 'slug' from the URL parameters (for App Router)
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        console.log('Fetching product for slug:', slug); // Debugging statement
        const productData = await getProduct(slug as string);
        setProduct(productData);
        console.log('Fetched product:', productData); // Debugging statement
      };

      fetchData();
    }
  }, [slug]);

  if (!slug) {
    return <p>Loading...</p>;  // Show a loading message until the slug is available
  }

  if (!product) {
    return <p>No product found for this slug. Please check the URL.</p>;  // Display message if no product is found
  }

  return (
    <div>
      {/* Passing the fetched product data to ProductDetails component */}
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;




import { notFound } from 'next/navigation';
import ProductDetails from '@/app/components/productDetails';
import { client } from '@/sanity/lib/client';
import Product from '@/type';

//  Define correct `PageProps`
interface PageProps {
  params: { slug: string }; //  Ensure `params` is `{ slug: string }` (not a Promise)
}

//  Fetch product from Sanity
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

//  Fix TypeScript Error: Ensure `params` is properly destructured
const ProductDetailPage = async ({ params }: PageProps) => {
  if (!params?.slug) return notFound(); //  Ensure slug exists

  const product = await getProduct(params.slug);
  if (!product) return notFound();

  return (
    <div>
      <ProductDetails product={product} key={product._id} />
    </div>
  );
};

export default ProductDetailPage;

//  Fix `generateStaticParams` to correctly return an array of `{ slug: string }`
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const query = '*[_type == "food"] { "slug": slug.current }';
  const products: { slug: string }[] = await client.fetch(query);
  
  return products.map((product) => ({
    slug: product.slug,
  }));
}


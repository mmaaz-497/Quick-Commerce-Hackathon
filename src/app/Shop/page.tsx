



import MenuNavebar from "../components/2Navebar";
import { client } from '@/sanity/lib/client';
import ProductListing from '../components/productListing';

import Product from "@/type";

async function fetchProduct(): Promise<Product[]> {
  // const user = await currentUser();
  // const metaData = user?.publicMetadata;

  // if (!metaData?.access || !Array.isArray(metaData.access) || !metaData.access.includes("Home") || !metaData.access.includes("Shop")) {
  //   redirect("/NotAuthorized");
  // }


  const query = `*[_type == 'food'] | order(_createdAt asc) {
    name,
    category,
    price,
    originalPrice,
    tags,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    description,
    available
  }`;

  const products = await client.fetch(query);
  return products;
}

export default async function ShopPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
  ];

  const Products = await fetchProduct();

  return (
    <div>
      <MenuNavebar title="Our Shop" breadcrumbs={breadcrumbs} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 h-full">
        {Products.map((product: Product) => (
          <div key={product._id} className="mt-[50px] md:mt-[100px]">
            <ProductListing product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

import MenuNavebar from "../components/2Navebar";
import { client } from '@/sanity/lib/client';
import ProductListing from '../components/productListing';
import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export function Page (){
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
  ];

  return (
    <div>
      <MenuNavebar title="Our Shop" breadcrumbs={breadcrumbs} />
     
    </div>
  );
}
 async function   fetchProduct():Promise<Product[]>  {
  const user = await currentUser();
  const metaData = user?.publicMetadata;
  if (!metaData?.access || !Array.isArray(metaData.access) || !metaData.access.includes("Home") || !metaData.access.includes("Shop")) {
    
  }else{redirect("/NotAuthorized");}
  const query = `*[_type == 'food'] | order(_createdAt asc) {
           name,
            category,
            price,
            originalPrice,
            tags,
            "slug":slug.current,
            "imageUrl":image.asset->url,
            description,
            available
         }`
         const products = await client.fetch(query)
         return products;
        }
        const ShopHero = async () =>{
          const breadcrumbs = [
            { name: "Home", href: "/" },
            { name: "Shop", href: "/Shop" },
          ];
          const Products =  await fetchProduct(); 
        
  return (
    <div>
             <MenuNavebar title="Our Shop" breadcrumbs={breadcrumbs} />
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 h-full">
             
          {
            Products.map((product:Product) => (
              <div className="mt-[50px] md:mt-[100px]" >
                  <ProductListing product={product} key={product._id}/>
                  </div>
            ))}
            </div>
            </div>
            
  );
}
export default ShopHero;
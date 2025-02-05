

import MenuNavebar from "../components/2Navebar";
import BlogHero from "../components/blogHero";


export function Page (){
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/Blog" },
  ];

  return (
    <div>
      <MenuNavebar title="Our Blog" breadcrumbs={breadcrumbs} />
     
    </div>
  );
}



const BlogPage = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/Blog" },
  ];

  return (
    <div>
      <MenuNavebar title="Our Blog" breadcrumbs={breadcrumbs} />
      <BlogHero/>
    
     
    </div>
  );
};

export default BlogPage;









            
                  
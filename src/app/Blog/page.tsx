import MenuNavebar from "../components/2Navebar";
import BlogHero from "../components/blogHero";

const BlogPage = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/Blog" },
  ];

  return (
    <div>
      <MenuNavebar title="Our Blog" breadcrumbs={breadcrumbs} />
      <BlogHero />
    </div>
  );
};

export default BlogPage;

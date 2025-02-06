import MenuNavebar from "../components/2Navebar";
import AboutClientSaying from "../components/aboutClientSaying";
import AboutFoodMenu from "../components/aboutFoodMenu";
import AboutHero from "../components/aboutHero";
import AboutWhyChoose from "../components/aboutWhyChoose";

const AboutPage = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <div>
      <MenuNavebar title="About Us" breadcrumbs={breadcrumbs} />
      <div>
        <AboutHero />
        <AboutWhyChoose />
        <AboutClientSaying />
        <AboutFoodMenu />
      </div>
    </div>
  );
};
export default AboutPage;
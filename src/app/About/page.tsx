import MenuNavebar from "../components/2Navebar";
import AboutClientSaying from "../components/aboutClientSaying";
import AboutFoodMenu from "../components/aboutFoodMenu";
import AboutHero from "../components/aboutHero";
import AboutWhyChoose from "../components/aboutWhyChoose";



export function Page (){
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <div>
      <MenuNavebar title="About Us" breadcrumbs={breadcrumbs} />
     
    </div>
  );
}



const AboutPage = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <div>
      <MenuNavebar title="About Us" breadcrumbs={breadcrumbs} />
                <AboutHero/>
//             <AboutWhyChoose/>
//             <AboutClientSaying/>
//             <AboutFoodMenu/>
      
    
     
    </div>
  );
};

export default AboutPage;


import MenuNavebar from "../components/2Navebar";
import Deserts from "../components/mDeserts";
import Drinks from "../components/mdrinks";
import MHero from "../components/mHero";


export function Page (){
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
  ];

  return (
    <div>
      <MenuNavebar title="Our Menu" breadcrumbs={breadcrumbs} />
     
    </div>
  );
}



const MenuPage = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
  ];

  return (
    <div>
      <MenuNavebar title="Our Menu" breadcrumbs={breadcrumbs} />
      <MHero />
      <Deserts />
      <Drinks />
     
    </div>
  );
};

export default MenuPage;









            
            
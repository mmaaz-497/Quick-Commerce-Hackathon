
import Hero from "./components/hero";
import ExtraFooter from "./components/extraFooter";
import OurChef from "./components/ourChef";
import ClientSaying from "./components/clientSaying";
import Blog from "./components/blog";
import FoodQuality from "./components/foodQuality";
import FoodyProduct from "./components/foodyProduct";
import Navebar from "./components/navebar";

export default function Home() {
  return (
    <div>
      <Navebar/>
      <FoodQuality/>
      <FoodyProduct/>
       <Hero/>
        <ExtraFooter/>
        <OurChef/>
        <ClientSaying/>
        <Blog/>
        
    </div>
  );
}

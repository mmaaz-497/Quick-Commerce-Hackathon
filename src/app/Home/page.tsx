import Blog from "../components/blog";
import ClientSaying from "../components/clientSaying";
import ExtraFooter from "../components/extraFooter";
import FoodQuality from "../components/foodQuality";
import FoodyProduct from "../components/foodyProduct";
import Hero from "../components/hero";
import Navebar from "../components/navebar";
import OurChef from "../components/ourChef";

export default function page () {
    return(
        <div  className="space-y-16">
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
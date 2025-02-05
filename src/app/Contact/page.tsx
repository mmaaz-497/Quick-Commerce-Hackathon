

import MenuNavebar from "../components/2Navebar";


export function Page (){
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <div>
      <MenuNavebar title="Contact Us" breadcrumbs={breadcrumbs} />
     
    </div>
  );
}



const ContactPage = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <div>
      <MenuNavebar title="Contact Us" breadcrumbs={breadcrumbs} />
   
    
     
    </div>
  );
};

export default ContactPage;









            
                  

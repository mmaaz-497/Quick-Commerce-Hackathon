

// import MenuNavebar from "../components/2Navebar";


// export function Page (){
//   const breadcrumbs = [
//     { name: "Home", href: "/" },
//     { name: "Contact", href: "/Contact" },
//   ];

//   return (
//     <div>
//       <MenuNavebar title="Contact Us" breadcrumbs={breadcrumbs} />
     
//     </div>
//   );
// }



// const ContactPage = () => {
//   const breadcrumbs = [
//     { name: "Home", href: "/" },
//     { name: "Contact", href: "/Contact" },
//   ];

//   return (
//     <div>
//       <MenuNavebar title="Contact Us" breadcrumbs={breadcrumbs} />
   
    
     
//     </div>
//   );
// };

// export default ContactPage;









            
                  
import MenuNavebar from "../components/2Navebar";

const ContactPage = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <MenuNavebar title="Contact Us" breadcrumbs={breadcrumbs} />
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Get in Touch</h1>
        <p className="text-gray-600 mt-2">We’d love to hear from you!</p>
        {/* Add a contact form or details here */}
      </div>
    </div>
  );
};

export default ContactPage;

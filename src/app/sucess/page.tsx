import MenuNavebar from "../components/2Navebar";


  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: " Payment", href: "" },
  ];

const SuccessPage: React.FC = () => (
    
    <div>
             <MenuNavebar title="About Payment" breadcrumbs={breadcrumbs} />
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 h-full"></div>
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-lg mt-4">Thank you for your purchase.</p>
    </div>
    </div>
);

export default SuccessPage;
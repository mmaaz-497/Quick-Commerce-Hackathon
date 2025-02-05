import MenuNavebar from "../components/2Navebar";


const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: " Payment", href: "" },
  ];

const CancelPage: React.FC = () => (
    <div>
             <MenuNavebar title="About Payment" breadcrumbs={breadcrumbs} />
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-red-600">Payment Cancelled</h1>
        <p className="text-lg mt-4">You can try again later.</p>
    </div>
    </div>
);

export default CancelPage;
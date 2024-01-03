import '../../Styles/style.css'
import '../../Styles/responsive.css'
import Header from "@/Component/Shared/Header/Header";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import SellerDashboard from "@/Component/Dashboard/Seller/SellerDashboard/SellerDashboard";

export const metadata = {
  title: "Seller Dashboard - Elmart",
};
const page = () => {
  return (
    <>
      <Header />
      <main className="seller-dashboard-page">
        <Breadcrumb currentPage="Seller Dashboard" />
        <SellerDashboard />
      </main>
    </>
  );
};

export default page;

import "../Styles/style.css";
import "../Styles/responsive.css";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import VendorShop from "@/Component/Vendor/VendorShop/VendorShop";

export const metadata = {
  title: "Vendor Shop Right Sidebar - Elmart",
};

const page = () => {
  return (
    <>
      <Header />
      <main className="vendor-right-sidebar">
        <Breadcrumb currentPage="Vendor Shop Right Sidebar" />
        <VendorShop isInfoSideBar={true} sideBarOrder="order-last" />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

import "../Styles/style.css";
import "../Styles/responsive.css";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Header from "@/Component/Shared/Header/Header";
import VendorShop from "@/Component/Vendor/VendorShop/VendorShop";

export const metadata = {
  title: "Vendor Shop Banner Left Sidebar - Elmart",
};

const page = () => {
  return (
    <>
      <Header />
      <main className="vendor-shop-details-banner">
        <Breadcrumb currentPage="Vendor Shop Banner Left Sidebar" />
        <VendorShop isInfoBanner={true} sideBarOrder="order-first" />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

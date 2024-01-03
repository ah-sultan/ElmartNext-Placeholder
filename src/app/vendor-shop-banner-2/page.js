import "../Styles/style.css";
import "../Styles/responsive.css";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import VendorShop from "@/Component/Vendor/VendorShop/VendorShop";

export const metadata = {
  title: "Vendor Shop Banner Right Sidebar - Elmart",
};

const page = () => {
  return (
    <>
      <Header />
      <main className="vendor-shop-details-banner">
        <Breadcrumb currentPage="Vendor Shop Banner Right Sidebar" />
        <VendorShop isInfoBanner={true} sideBarOrder="order-last" />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

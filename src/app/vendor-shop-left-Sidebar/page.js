import "../Styles/style.css";
import "../Styles/responsive.css";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import VendorShop from "@/Component/Vendor/VendorShop/VendorShop";

export const metadata = {
  title: "Vendor Shop Left Sidebar - Elmart",
};

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Vendor Shop Left Sidebar" />
        <VendorShop isInfoSideBar={true} sideBarOrder="order-first" />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

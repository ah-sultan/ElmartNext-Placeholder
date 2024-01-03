import "../Styles/style.css";
import "../Styles/responsive.css";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Header from "@/Component/Shared/Header/Header";
import VendorList from "@/Component/Vendor/VendorList/VendorList";

export const metadata = {
  title: "Vendor List - Elmart",
};
const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Vendor List" />
        <VendorList />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

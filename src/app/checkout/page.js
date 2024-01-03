import '../Styles/style.css'
import '../Styles/responsive.css'
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Checkout from "@/Component/Checkout/Checkout";
import Header from "@/Component/Shared/Header/Header";

export const metadata = {
  title: "Checkout - Elmart",
};

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb currentPage="Checkout" />
      <Checkout/>
      <Newsletter/>
    </>
  );
};

export default page;

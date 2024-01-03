import '../Styles/style.css'
import '../Styles/responsive.css'
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import CartArea from "@/Component/CartSection/CartArea/CartArea";
import ProceedToPay from "@/Component/CartSection/ProceedToPay/ProceedToPay";
import Features from "@/Component/FeaturesSection/Features/Features";
import Header from "@/Component/Shared/Header/Header";


export const metadata = {
  title: "cart",
};

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Cart" />
        <CartArea />
        <ProceedToPay />
        <Features />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

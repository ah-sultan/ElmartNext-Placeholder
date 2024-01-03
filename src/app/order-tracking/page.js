import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import OrderTracking from "@/Component/OrderTracking/OrderTracking";
import RelatedProduct from "@/Component/ShopSection/RelatedProduct/RelatedProduct";
import Header from "@/Component/Shared/Header/Header";


export const metadata = {
  title: "Order Tracking - Elmart",
};

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Order Tracking"/>
        <OrderTracking/>
        <RelatedProduct/>
        <Newsletter/>
      </main>
    </>
  );
};

export default page;

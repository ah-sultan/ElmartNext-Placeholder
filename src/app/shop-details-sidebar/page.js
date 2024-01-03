import '../Styles/style.css'
import '../Styles/responsive.css'
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Header from "@/Component/Shared/Header/Header";
import RelatedProduct from "@/Component/ShopSection/RelatedProduct/RelatedProduct";
import ShopDetailSideBar from "@/Component/ShopSection/ShopDetailSideBar/ShopDetailSideBar";


export const metadata = {
  title: "Shop Details Sidebar - Elmart",
};
const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Shop Details Sidebar" />
        <ShopDetailSideBar/>
        <RelatedProduct />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

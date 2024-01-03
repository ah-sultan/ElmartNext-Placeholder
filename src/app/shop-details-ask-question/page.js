import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import RelatedProduct from "@/Component/ShopSection/RelatedProduct/RelatedProduct";
import ShopProdRevDesc from "@/Component/ShopSection/ShopProdRevDesc/ShopProdRevDesc";
import ShopProductDetails from "@/Component/ShopSection/ShopProductDetails/ShopProductDetails";

export const metadata = {
  title: "Shop Details Ask A Question - Elmart",
};
const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Shop Details Ask A Question" />
        <ShopProductDetails isAskQue={true}/>
        <RelatedProduct />
        <ShopProdRevDesc/>
        <Newsletter />
      </main>
    </>
  );
};

export default page;

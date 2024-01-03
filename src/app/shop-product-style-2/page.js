import '../Styles/style.css'
import '../Styles/responsive.css'
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Header from "@/Component/Shared/Header/Header";
import ShopPageShop from "@/Component/ShopSection/ShopPageShop/ShopPageShop";


export const  metadata = {
title : 'Shop Product Style 2 - Elmart'
}
const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Shop Product Style 2"/>
        <ShopPageShop sideBarOrder={"order-first"} isPagination={true} isProductCard2={true}/>
        <Newsletter/>
      </main>
    </>
  );
};

export default page;

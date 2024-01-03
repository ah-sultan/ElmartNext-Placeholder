import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import ShopPageShop from "@/Component/ShopSection/ShopPageShop/ShopPageShop";


export const  metadata = {
title : 'Shop Banner Left Sidebar - Elmart'
}
const page = () => {
  return (
    <>
      <Header />
      <main className="shop-left-sidebar">
        <Breadcrumb currentPage="Shop Banner Left Sidebar"/>
        <ShopPageShop sideBarOrder="order-first" isBanner={true} isPagination={true}/>
        <Newsletter/>
      </main>
    </>
  );
};

export default page;

import '../Styles/style.css'
import '../Styles/responsive.css'
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Header from "@/Component/Shared/Header/Header";
import ShopPageShop from "@/Component/ShopSection/ShopPageShop/ShopPageShop";

export const  metadata = {
title : 'Shop Right Sidebar - Elmart'
}
const page = () => {
  return (
    <>
      <Header />
      <main className="shop-right-sidebar">
        <Breadcrumb currentPage="Shop Right Sidebar"/>
        <ShopPageShop sideBarOrder={"order-last"} isPagination={true}/>
        <Newsletter/>
      </main>
    </>
  );
};

export default page;

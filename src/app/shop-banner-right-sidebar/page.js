import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import ShopPageShop from "@/Component/ShopSection/ShopPageShop/ShopPageShop";


export const  metadata = {
title : 'Shop Banner Right Sidebar - Elmart'
}
const page = () => {
  return (
    <>
      <Header />
      <main className="shop-right-sidebar">
        <Breadcrumb currentPage="Shop Banner Right Sidebar"/>
        <ShopPageShop sideBarOrder={"order-last"} isBanner={true} isPagination={true}/>
        <Newsletter/>
      </main>
    </>
  );
};

export default page;

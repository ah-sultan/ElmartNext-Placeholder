import '../Styles/style.css'
import '../Styles/responsive.css'
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Header from "@/Component/Shared/Header/Header";
import ShopPageShop from "@/Component/ShopSection/ShopPageShop/ShopPageShop";

export const  metadata = {
title : 'Shop - Elmart'
}
const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Shop"/>
        <ShopPageShop sideBarOrder={"order-first"} isPagination={true}/>
        <Newsletter/>
      </main>
    </>
  );
};

export default page;

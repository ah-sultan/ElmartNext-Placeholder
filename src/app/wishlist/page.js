import "../Styles/style.css";
import "../Styles/responsive.css";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Features from "@/Component/FeaturesSection/Features/Features";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import WishlistArea from "@/Component/WishlistArea/WishlistArea";

export const metadata = {
  title: "Wishlist - Elmart - Elmart",
};
const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Wishlist" />
        <WishlistArea />
        <Features />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

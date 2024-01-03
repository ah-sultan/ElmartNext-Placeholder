import '../Styles/style.css'
import '../Styles/responsive.css'
import DealProduct from "@/Component/AllDeals/DealProduct/DealProduct";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Promo from "@/Component/AllDeals/Promo/Promo";
import Blog from "@/Component/BlogSection/Blog/Blog";
import Category from "@/Component/CategorySection/Category/Category";
import Features from "@/Component/FeaturesSection/Features/Features";
import FeaturesProduct from "@/Component/FeaturesSection/FeaturesProduct/FeaturesProduct";
import Hero from "@/Component/HeroSection/Hero/Hero";
import HomeShop from "@/Component/HomeShopSection/HomeShop/HomeShop";
import HeaderTwo from "@/Component/Shared/HeaderTwo/HeaderTwo";
import Testimonial from "@/Component/TestimonialSection/Testimonial/Testimonial";



export const metadata = {
  title : "Home Two - Elmart"
}

const page = () => {
  return (
    <>
      <div>
        <HeaderTwo />
      </div>
      <main>
        <Hero />
        <Features />
        <Category />
        <Promo />
        <FeaturesProduct cardType="feature" />
        <DealProduct />
        <HomeShop cardType="shop"/>
        <Testimonial />
        <Blog />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

import './Styles/style.css'
import './Styles/responsive.css'
import HeaderTopBanner from "@/Component/Shared/HeaderThree/HeaderTopBanner";
import HeroV2Slider from "@/Component/HeroSection/HeroV2Silder/HeroV2Silder";
import Features from "@/Component/FeaturesSection/Features/Features";
import CategoryV2 from "@/Component/CategorySection/CategoryV2/CategoryV2";
import Promo from "@/Component/AllDeals/Promo/Promo";
import FeaturesProductV2 from "@/Component/FeaturesSection/FeaturesProductV2/FeaturesProductV2";
import WorkingProcess from "@/Component/WorkingProcess/WorkingProcess";
import WeekDeal from "@/Component/AllDeals/WeekDeal/WeekDeal";
import HomeShopV2 from "@/Component/HomeShopSection/HomeShopV2/HomeShopV2";
import Testimonial from "@/Component/TestimonialSection/Testimonial/Testimonial";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import HeaderThree from "@/Component/Shared/HeaderThree/HeaderThree";
import ParchesNotification from "@/Component/widgets/ParchesNotification/ParchesNotification";

export const metadata = {
  title: "Home Page One - Elmart",
};

export default function Home() {
  return (
    <>
      <div className="home-page-three">
        <HeaderTopBanner />
        <HeaderThree />
      </div>
      <main className="home-page-three">
        <HeroV2Slider />
        <Features />
        <CategoryV2 />
        <Promo />
        <FeaturesProductV2 cardType="feature" />
        <WorkingProcess />
        <WeekDeal />
        <HomeShopV2 />
        <Testimonial />
        <Newsletter />
        <ParchesNotification />
      </main>
    </>
  );
}

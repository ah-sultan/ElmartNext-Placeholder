import '../Styles/style.css'
import '../Styles/responsive.css'
import CategoryPromo from "@/Component/CategorySection/CategoryPromo/CategoryPromo";
import CategoryV2 from "@/Component/CategorySection/CategoryV2/CategoryV2";
import FeatureV2 from "@/Component/FeaturesSection/FeatureV2/FeatureV2";
import FeaturesProductV2 from "@/Component/FeaturesSection/FeaturesProductV2/FeaturesProductV2";
import HeroV2 from "@/Component/HeroSection/HeroV2/HeroV2";
import HomeShopV3 from "@/Component/HomeShopSection/HomeShopV3/HomeShopV3";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import TestimonialV2 from "@/Component/TestimonialSection/TestimonialV2/TestimonialV2";
import WeekDeal from "@/Component/AllDeals/WeekDeal/WeekDeal";
import WorkingProcess from "@/Component/WorkingProcess/WorkingProcess";


export const metadata = {
  title: "Home Three - Elmart",
};

const page = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <HeroV2 />
        <FeatureV2 />
        <CategoryV2 />
        <CategoryPromo />
        <FeaturesProductV2 cardType="feature"/>
        <WorkingProcess/>
        <WeekDeal/>
        <HomeShopV3 cardType="shop"/>
        <TestimonialV2/>
        <Newsletter/>
      </main>
    </>
  );
};

export default page;

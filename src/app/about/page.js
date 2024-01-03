import '../Styles/style.css'
import '../Styles/responsive.css'
import AboutUs from "@/Component/AboutUs/AboutUs";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Features from "@/Component/FeaturesSection/Features/Features";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import TeamMember from "@/Component/TeamMember/TeamMember";
import TestimonialV2 from "@/Component/TestimonialSection/TestimonialV2/TestimonialV2";
import WorkingProcess from "@/Component/WorkingProcess/WorkingProcess";

export const metadata = {
  title: "About Us - Elmart",
};

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="About Us" />
        <AboutUs />
        <Features />
        <TeamMember />
        <TestimonialV2 />
        <WorkingProcess />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

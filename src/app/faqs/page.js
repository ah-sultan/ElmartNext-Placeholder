import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Faq from "@/Component/Faq/Faq";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";


export const metadata = {
  title: "FAQs Page - Elmart",
};

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="FAQs" />
        <Faq />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

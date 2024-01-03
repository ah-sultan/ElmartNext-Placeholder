import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import BlogPage from "@/Component/BlogSection/BlogPage/BlogPage";

export const metadata = {
  title: "Our Blogs - Elmart",
};
const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Blog Page"/>
        <BlogPage/>
        <Newsletter/>
      </main>
    </>
  );
};

export default page;

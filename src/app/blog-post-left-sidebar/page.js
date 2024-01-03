import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import BlogPostSidebar from "@/Component/BlogSection/BlogPostSidebar/BlogPostSidebar";

export const metadata = {
  title : "Blog Post Left Sidebar - Elamrt"
}

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Blog Post Left Sidebar" />
        <BlogPostSidebar sideBarOrder=" order-last order-md-first" />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

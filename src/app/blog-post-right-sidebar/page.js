import '../Styles/style.css'
import '../Styles/responsive.css'
import BlogPostSidebar from "@/Component/BlogSection/BlogPostSidebar/BlogPostSidebar"; 
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";


export const metadata = {
  title: "Blog Post Right Sidebar Elmart"
}

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Blog Post Right Sidebar" />
        <BlogPostSidebar sideBarOrder="order-last" />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

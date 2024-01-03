import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import BlogPostNoSideBar from "@/Component/BlogSection/BlogPostNoSideBar/BlogPostNoSideBar";

export const metadata = {
  title: "Blog Post No Sidebar - Elmart",
};


const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Blog Post No Sidebar" />
        <BlogPostNoSideBar/>
        <Newsletter />
      </main>
    </>
  );
};

export default page;

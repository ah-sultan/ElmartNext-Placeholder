import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import Newsletter from "@/Component/AllDeals/Newsletter/Newsletter";
import Header from "@/Component/Shared/Header/Header";
import BlogPostSidebar from "@/Component/BlogSection/BlogPostSidebar/BlogPostSidebar";

export const metadata = {
  title: "Blog post Page - Elmart",
};

const page = ({ searchParams }) => {
  metadata.title = searchParams.slug
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Blog Post Page" />
        <BlogPostSidebar />
        <Newsletter />
      </main>
    </>
  );
};

export default page;

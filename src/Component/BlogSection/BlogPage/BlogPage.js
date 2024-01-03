import Pagination from "@/Component/widgets/Pagination/Pagination";
import BlogCard from "../BlogCard/BlogCard";
import blogPageData from "./blogPageData.json";

const BlogPage = () => {
  return (
    <>
      <section className="blog-page">
        <div className="container m-auto">
          <div className="row p-0">
            {blogPageData &&
              Array.isArray(blogPageData) &&
              [...blogPageData].map((data, index) => {
                return (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <BlogCard {...data} />
                  </div>
                );
              })}
          </div>
          <div className="row">
            <nav className="blog-page-navigation">
              <Pagination />
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;

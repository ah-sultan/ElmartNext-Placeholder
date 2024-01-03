import CommentForm from "@/Component/CommentSection/CommentForm/CommentForm";
import BlogPopularTag from "../BlogPopularTag/BlogPopularTag";
import BlogPostArea from "../BlogPostArea/BlogPostArea";
import BlogPostCategory from "../BlogPostCategory/BlogPostCategory";
import BlogPostNewsLetter from "../BlogPostNewsLetter/BlogPostNewsLetter";
import BlogSearch from "../BlogSearch/BlogSearch";
import LatestPostWidget from "../LatestPostWidget/LatestPostWidget";
import CommentedSection from "@/Component/CommentSection/CommentedSection/CommentedSection";


const BlogPostSidebar = ({sideBarOrder}) => {
  return (
    <>
      <section className="blog-post-page">
        <div className="container">
          <div className="row">
            <div className={`col-md-3 blog-post-sidebar ${sideBarOrder}`}>
              <BlogSearch />
              <LatestPostWidget />
              <BlogPostCategory />
              <BlogPopularTag />
              <BlogPostNewsLetter />
            </div>
            <div className="col-md-9 blog-content-area">
              <BlogPostArea />
              <CommentForm />
              <div className="commented-section tab-content">
                <CommentedSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostSidebar;

import CommentForm from "@/Component/CommentSection/CommentForm/CommentForm";
import BlogPostArea from "../BlogPostArea/BlogPostArea";
import CommentedSection from "@/Component/CommentSection/CommentedSection/CommentedSection";


const BlogPostNoSideBar = () => {
  return (
    <>
      <section className="blog-post-page">
        <div className="container">
          <div className="row">
            <div className="col-12 blog-content-area">
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

export default BlogPostNoSideBar;

import BlogCard from "../BlogCard/BlogCard";
import blogCardsData from './blogCardData.json'

const Blog = () => {

  return (
    <section className="blog-section">
      <div className="container m-auto">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title text-center">
              <span>Our News</span>
              <h2>Our Latest Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogCardsData.map((data, index) => {
            return (
              <div key={index} className="col-md-4">
                <BlogCard {...data} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;

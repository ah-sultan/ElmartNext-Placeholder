import { Fragment } from "react";

const BlogPopularTag = () => {
  const tags = [
    "Ecommerce",
    "Creative",
    "Shopping",
    "Electronic",
    "Product",
    "Modern",
    "Fashion Store",
    "Multipurpose",
    
  ];
  return (
    <>
      <div className="popular-tags">
        <h2>Popular Tags</h2>
        <div>
          {[...tags].map((tag, index) => (
            <Fragment key={index}>
              <div className="side-bar-tag-item">{tag}</div>{" "}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPopularTag;

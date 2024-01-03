 

const BlogSearch = () => {
  return (
    <>
      <div className="blog-search">
        <h2>Search</h2>
        <div className="bs-sbar">
          <input
            type="search"
            name="blog-search"
            id="blog-search"
            placeholder="Search"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default BlogSearch;

const BlogPostNewsLetter = () => {
  return (
    <>
      <div className="post-sidebar-newsletter">
        <div className="bg-color"></div>
        <div className="form">
          <h2>Our Newsletter</h2>
          <p>Follow our newsletter to stay updated about us.</p>
          <form action="#">
            <input
              type="email"
              name="post-subscribe"
              id="post-subscribe"
              placeholder="Enter Your Email Address"
            />
            <input type="submit"defaultValue="Subscribe" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogPostNewsLetter;

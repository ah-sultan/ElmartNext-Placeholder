import Image from "next/image";
import Link from "next/link";

const BlogPostArea = () => {
  return (
    <>
      <div className="blog-post-area">
        <div className="post-title">
          <h2>Happy couple having fun while online shopping at home</h2>
          <div className="post-meta">
            <div className="post-meta-item">
              <Link href="#">
                <i className="fa-regular fa-user"></i> <span>By Admin</span>
              </Link>
            </div>
            <div className="post-meta-item">
              <Link href="#">
                <i className="fa-regular fa-comments"></i> <span>2 Comments</span>
              </Link>
            </div>
            <div className="post-meta-item">
              <Link href="#">
                <i className="fa-regular fa-calendar-days"></i>{" "}
                <span>13 / 10 / 2022</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="post-body">
          <p>
            {`There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't as anything embarrassing hidden in the
            middle of text.`}
          </p>
          <div className="post-images">
            <Image
              width={1039}
              height={449}
              src="/image/blog-page/post-image-1.png"
              alt="Post Image 1"
              className="img-fluid"
              quality={100}
            />
          </div>
          <p>
            {`There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteratioin some form, by injected humour
            a or randomised words which don't look even slightly believable. If
            you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything embarrassing hidden in the middle of text. All
            the Lorem Ipsum generators on the Internet tend to repeat.`}
          </p>
          <ul>
            {[
              "All the Lorem Ipsum generators on the Internet tend",
              "repeat predefined chunks as necessary, making this the first true generator on the Internet",
              "All the Lorem Ipsum generators on the Internet tend to repeat",
            ].map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
          </ul>
          <blockquote>
            <div className="left">
              <p>
                {`We can easily manage if we will only take, eachs days, Our the
                    burden But the load will be too heavy for us if we the a carry
                    yesterday's burden over again today.`}
              </p>
              <h4>
                Siddik AK <span>CEO of Etoshi</span>
              </h4>
            </div>
            <div className="right">
              <i className="fa-solid fa-quote-right"></i>
            </div>
          </blockquote>
          <p>
            {` Randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            a isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat.`}
          </p>
          <div className="post-gallery">
            <Image
              width={505}
              height={300}
              src="/image/blog-page/post-image-2.png"
              alt="Post Image 2"
              className="img-fluid"
              quality={100}
            />
            <Image
              width={505}
              height={300}
              src="/image/blog-page/post-image-3.png"
              alt="Post Image 3"
              className="img-fluid"
              quality={100}
            />
          </div>
          <p>
            {`Consectetur, from a Lorem Ipsum passage, and going through the cites
                of the word in classical literature, discovered the undoubtable a
                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                Cicero, written in 45 BC. This book is a treatise on the theory of
                ethics`}
          </p>
        </div>
        <div className="post-bottom">
          <div className="post-tags">
            <span>Tag:</span>
            {["e-Commerce", "Shopping", "Data"].map((tag, index) => {
              return (
                <Link key={index} href="#" className="tags">
                  {tag}
                </Link>
              );
            })}
          </div>
          <div className="social-share">
            <span>Share:</span>
            <div className="social-icons">
              <Link href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>{" "}
              <Link href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>{" "}
              <Link href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>{" "}
              <Link href="#">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostArea;

import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ id, image, title, author, date, comments }) => {
  return (
    <div className="blog-card">
      <div className="blog-featured-image">
        <Image
          src={image}
          alt={title}
          width={464}
          height={320}
          className="img-fluid"
          quality={100}
        />
      </div>
      <div className="blog-meta">
        <div className="blog-author">
          <Link href="#">
            <i className="fa-regular fa-user"></i> <span> By {author}</span>
          </Link>
        </div>
        <div className="blog-date">
          <Link href="#">
            <i className="fa-regular fa-calendar-days"></i> <span>{date}</span>
          </Link>
        </div>
        <div className="blog-comments">
          <Link href="#">
            <i className="fa-regular fa-comments"></i> <span>{comments}</span>
          </Link>
        </div>
      </div>
      <h2>
        <Link
          href={{
            pathname: `/blog-post-details/${title}`,
            query: { slug: title },
          }}
        >
          {title}
        </Link>
      </h2>
      <Link href={{
            pathname: `/blog-post-details/${title}`,
            query: { slug: title },
          }} className="button-a">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;

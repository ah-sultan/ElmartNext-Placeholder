import Image from "next/image";
import postWidgetData from "./postWidgetData.json";
import Link from "next/link";

const LatestPostWidget = () => {
  return (
    <>
      <div className="latest-post-widget">
        <h2>Latest Post </h2>
        {postWidgetData &&
          Array.isArray(postWidgetData) &&
          [...postWidgetData].map((post, index) => (
            <div className="post-item" key={index}>
              <div className="image-n-date">
                <Image
                  width={282}
                  height={152}
                  src={post.image}
                  alt="Post Image"
                  className="img-fluid"
                  quality={100}
                />
                <span>
                  <i className="fa-regular fa-calendar-days"></i> {post.date}
                </span>
              </div>
              <h3>
                <Link href="#">{post.title}</Link>
              </h3>
            </div>
          ))}
      </div>
    </>
  );
};

export default LatestPostWidget;

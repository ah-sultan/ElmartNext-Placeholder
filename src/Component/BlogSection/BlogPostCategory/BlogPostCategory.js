import Link from "next/link";

const BlogPostCategory = () => {
  const categories = [
    { name: "Women's Bag", count: 12 },
    { name: "Men's Accessories", count: 15 },
    { name: "Boy's Dress", count: 6 },
    { name: "Women's Fashion", count: 9 },
    { name: "Fashion Accessories", count: 20 },
    { name: "Leather Bags", count: 22 },
    { name: "Gift for Him", count: 10 },
  ];
  return (
    <>
      <div className="post-categories">
        <h2>Categories</h2>
        <ul>
          {[...categories].map((category, index) => (
            <li key={index} className="post-cat-item">
              <span>
                <Link href="#">{category.name}</Link>
              </span>
              <span>({category.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogPostCategory;

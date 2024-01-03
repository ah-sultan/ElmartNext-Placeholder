import Link from "next/link";

const ShopSizeFilter = () => {
  // Dummy Sizes data
  const sizes = ["S", "M", "L", "XL", "2XL", "X", "XXL", "Slim Fit", "XS"];

  return (
    <div className="lsb-widget-3">
      <h2 className="lsb-widget-title">Size</h2>
      <div className="tag-cloud">
        {sizes.map((size, index) => (
          <div key={index} className="tag-item">
            <Link href="/">{size}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSizeFilter;

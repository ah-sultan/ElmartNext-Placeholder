import { useState } from "react";

const ShopProductSize = ({ sizes }) => {
  const [selectSize, setSelectSize] = useState(sizes ? sizes[0] : []);
  // Handle Select Size
  const handleSizeSelect = (selectedSize) => {
    setSelectSize(selectedSize);
  };
  return (
    <>
      <div className="prod-size-select">
        <h2>Size</h2>
        <div className="tag-cloud-v2">
          {sizes &&
            Array.isArray(sizes) &&
            [...sizes].map((size, index) => (
              <div
                onClick={() => handleSizeSelect(size)}
                key={index}
                className={`tag-item-v2 ${selectSize === size ? "active" : ""}`}
              >
                <span>{size}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShopProductSize;

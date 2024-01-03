import { useState } from "react";

const ShopProductColor = ({ colors }) => {
  const [selectColor, setSelectColor] = useState(colors ? colors[0] : []);
  const handleColorSelect = (selectedColor) => {
    setSelectColor(selectedColor);
  };
  return (
    <>
      <div className="color-selection">
        <h2>Color</h2>
        <div className="prod-colors-select">
          {colors &&
            Array.isArray(colors) &&
            [...colors].map((color, index) => {
              return (
                <span
                  onClick={() => handleColorSelect(color)}
                  key={index}
                  className={`color-choice prod-color4 ${
                    selectColor === color ? "active" : ""
                  }`}
                  style={{
                    background: `${color}`,
                    border: `2px solid ${color}`,
                  }}
                ></span>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ShopProductColor;

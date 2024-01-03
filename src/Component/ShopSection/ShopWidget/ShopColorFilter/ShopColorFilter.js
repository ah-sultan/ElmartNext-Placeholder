import Link from "next/link";

const ShopColorFilter = () => {
  const colors = [
    "#3577F0",
    "#F1511B",
    "#13172B",
    "#5A5858",
    "#F6E5CF",
    "#FF497C",
  ];
  return (
    <>
      <div className="lsb-widget-3">
        <h2 className="lsb-widget-title">Colors</h2>
        <div className="colors-select">
          {colors &&
            Array.isArray(colors) &&
            [...colors].map((color, index) => (
              <Link href="/" key={index}>
                <span
                  className="color-choice"
                  style={{
                    background: color,
                    border: `1px solid ${color}`,
                  }}
                ></span>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShopColorFilter;

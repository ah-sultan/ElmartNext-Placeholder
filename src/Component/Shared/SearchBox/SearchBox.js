import Link from "next/link";
import SearchProduct from "./SearchProduct";

const SearchBox = ({ showSearchBox, setShowSearchBox }) => {
  return (
    <div className={`search-box ${showSearchBox ? "search-visibility" : ""}`}>
      <div className="search-box-container">
        <div className="close-btn" onClick={() => setShowSearchBox(false)}>
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
        <form action="#">
          <input
            type="search"
            placeholder="Search what you're looking for..."
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className="pro-search-result-area">
          <div className="search-result-header">
            <h6>15 Results Found</h6>
            <Link href="/">View All</Link>
          </div>
          <div className="search-results">
            {[
              {
                image:
                  "/image/home-one/feature-product/model-blue-suit-fashionable.jpg",
                title: "Model Blue Suit Fashionable",
                rating: 5,
                price: "19.99",
                discountPrice: "39.99",
                reviews: 45,
              },
              {
                image:
                  "/image/home-one/feature-product/white-sweater-women.jpg",
                title: "White Sweater for Women",
                rating: 5,
                price: "9.99",
                discountPrice: "9.99",
                reviews: 55,
              },
            ].map((data, index) => {
              return <SearchProduct key={index} {...data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

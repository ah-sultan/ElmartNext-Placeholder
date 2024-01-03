const HeaderSearchForm = () => {
  const categories = [
    { id: 0, value: 0, title: "All Category" },
    { id: 1, value: 1, title: "Clock" },
    { id: 2, value: 2, title: "Lighting" },
    { id: 3, value: 3, title: "Furniture" },
    { id: 4, value: 4, title: "Toy" },
    { id: 5, value: 5, title: "Fashion" },
    { id: 6, value: 6, title: "Others" },
    { id: 7, value: 7, title: "Furniture" },
    { id: 8, value: 8, title: "Toy" },
    { id: 9, value: 9, title: "Fashion" },
    { id: 10, value: 10, title: "Others" },
  ];
  return (
    <>
      <form
        autoComplete="on"
        action="#"
        className="main_search_bar d-none d-lg-flex align-content-center"
      >
        <div className="category_area">
          <select className="category_items ps-0">
            {categories && Array.isArray(categories) && [...categories].map((option) => {
              return (
                <option value={option.value} key={option.id}>
                  {option.title}
                </option>
              );
            })}
          </select>
          <div className="select_icon">
            <i className="toggle_open fa-solid fa-caret-down"></i>
            <i
              style={{ display: "none" }}
              className="toggle_close fa-solid fa-caret-up"
            ></i>
          </div>
        </div>
        <div className="search_input">
          <label htmlFor="searchField"></label>
          <input
            type="text"
            name="searchField"
            id="searchField"
            placeholder="Enter search keyword.."
            required
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default HeaderSearchForm;

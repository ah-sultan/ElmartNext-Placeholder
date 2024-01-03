
const MobileMenuSearchForm = () => {
  return (
    <>
      <form
        autoComplete="on"
        action="/"
        className="main_search_bar mobile_search_bar d-flex d-lg-none align-content-center p-0 pb-3"
      >
        <div className="search_input mobile mobile_sm">
          <label htmlFor="searchField"></label>
          <input
            type="text"
            name="searchField"
            id="offcanvas_searchField"
            placeholder="Enter search keyword.."
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default MobileMenuSearchForm;

import Link from "next/link";

const Pagination = () => {
  return (
    <>
      <ul className="pagination">
        {/* Previous Blog Btn */}
        <li className="page-item">
          <Link className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>

        {["1", "2", "3", "...", "10"].map((data, index) => {
          return (
            <li key={index} className="page-item">
              <Link className="page-link" href="#">
                {data}
              </Link>
            </li>
          );
        })}

        {/* Previous Blog Btn */}
        <li className="page-item">
          <Link className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">
              <i className="fa-solid fa-chevron-right"></i>
            </span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pagination;

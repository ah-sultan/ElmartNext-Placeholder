import Link from "next/link";

const HeaderTop = () => {
  return (
    <>
      <div className="row align-items-center header-top">
        <div className="col-sm-6 header-top-left p-0">
          <p>
            Email: <Link href="mailto:support@domain.com">support@domain.com</Link>
          </p>
          <span className="divider"></span>
          <p>
            Today&apos;s Deal:Sale <span>Off 50%</span>
          </p>
        </div>
        <div className="col-sm-6 header-top-right p-0">
          <ul>
            <li>
              <Link href="/order-tracking">Order Tracking</Link>
            </li>{" "}
            {/* Currency */}
            <li>
              <Link href="/">
                Currency <i className="fa-solid fa-chevron-down"></i>
              </Link>
              <ul className="top-sub-menu">
                {["USD", "EUR", "GBP", "BDT", "INR", "RUB"].map(
                  (data, index) => {
                    return (
                      <li key={index}>
                        <Link href="/">{data}</Link>
                      </li>
                    );
                  }
                )}
              </ul>
            </li>{" "}
            {/* Langues */}
            <li>
              <Link href="#">
                Language <i className="fa-solid fa-chevron-down"></i>
              </Link>
              <ul className="top-sub-menu">
                {[
                  "English",
                  "Spanish",
                  "Portuguese",
                  "Russian",
                  "Bengali",
                  "Hindi",
                ].map((data, index) => {
                  return (
                    <li key={index}>
                      <Link href="/">{data}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;

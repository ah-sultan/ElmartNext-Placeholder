import './Styles/style.css'
import './Styles/responsive.css'
import Header from "@/Component/Shared/Header/Header";
import Link from "next/link";

const notFound = () => {
  return (
    <>
      <Header />
      <main className="not-found-page">
        <div className="not-found-wrapper">
          <div>
            <h2 className="heading-404" style={{ fontSize: "150px" }}>
              404
            </h2>
            <h6 className="error-heading">
              Something Error. Searched Page Not Found
            </h6>
            <div className="text-center">
              <Link href="/" className="back-home">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default notFound;

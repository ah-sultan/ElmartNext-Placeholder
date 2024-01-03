import Image from "next/image";

const Breadcrumb = ({ currentPage }) => {
  return (
    <section className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 breadcrumb-left">
            <div className="breadcrumb-left-bg"></div>
            <Image
              width="222"
              height="198"
              src="/image/breadcrumb/left-img.png"
              alt="left image"
              quality={100}
              className="img-fluid"
            />
          </div>
          <div className="col-sm-4 breadcrumb-wrap">
            <h2>{currentPage}</h2>
            <div className="breadcrumb">
              <p>Home</p>
              <span></span>
              <p className="current-page">{currentPage}</p>
            </div>
          </div>
          <div className="col-sm-4 breadcrumb-right">
            <div className="breadcrumb-right-bg"></div>
            <Image
              width="259"
              height="198"
              src="/image/breadcrumb/right-img.png"
              alt="right-image"
              quality={100}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;

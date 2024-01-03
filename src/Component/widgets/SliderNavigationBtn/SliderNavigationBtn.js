
const SliderNavigationBtn = ({ nextEl, prevEl }) => {
  return (
    <>
      <div className="swiper-nav">
        <div className={`swiper-button-prev ${prevEl}`}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </div>
        <div className={`swiper-button-next ${nextEl}`}>
          <i className="fa-solid fa-arrow-right-long "></i>
        </div>
      </div>
    </>
  );
};

export default SliderNavigationBtn;

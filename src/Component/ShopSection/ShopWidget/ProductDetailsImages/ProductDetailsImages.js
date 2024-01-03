import Image from "next/image";
import productImages from "./poroductImages.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Nav, Tab } from "react-bootstrap";

const ProductDetailsImages = ({ isImgSlider }) => {
  const needSlider = productImages.length > 4 ? true : false;

  // const swiper config
  const swiperConfig = {
    slidesPerView: 4,
    spaceBetween: 23,
    loop: true,
    navigation: {
      nextEl: ".shop-dtls-img-sldr-btn-next",
      prevEl: ".shop-dtls-img-sldr-btn-prev",
    },
  };
  return (
    <>
      <Tab.Container defaultActiveKey={productImages[0].id}>
        <Tab.Content className="tab-content" id="myTabContent">
          {productImages &&
            Array.isArray(productImages) &&
            [...productImages].map((data, index) => {
              return (
                <Tab.Pane eventKey={data.id} key={index}>
                  <Image
                    quality={100}
                    width={369}
                    height={450}
                    id={data.id}
                    src={data.image}
                    alt={data.name}
                    className="img-fluid"
                  />
                </Tab.Pane>
              );
            })}
        </Tab.Content>
        {/* Is Not images Slider */}
        {!isImgSlider && !needSlider && (
          <Nav as="ul" className="nav" id="myTab" role="tablist">
            {productImages &&
              Array.isArray(productImages) &&
              [...productImages].map((data, index, array) => {
                const isLast = index === array.length - 1;
                return (
                  <Nav.Item
                    as="li"
                    key={index}
                    className={`nav-item ${isLast && "last"}`}
                    role="presentation"
                  >
                    <Nav.Link
                      as="button"
                      className="nav-link"
                      eventKey={data.id}
                      type="button"
                    >
                      <Image
                        quality={100}
                        width={83}
                        height={102}
                        className="img-fluid"
                        src={data.image}
                        alt={data.icon}
                      />
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
          </Nav>
        )}

        {(isImgSlider || needSlider) && (
          <Swiper
            {...swiperConfig}
            modules={[Navigation]}
            className="nav shop-details-image-slider"
            tag="ul"
          >
            {[...productImages, ...productImages].map((data, index) => {
              return (
                <SwiperSlide key={index} className="nav-item" tag="li">
                  <Nav.Link className="nav-link" eventKey={data.id}>
                    <Image
                      quality={100}
                      width={83}
                      height={102}
                      className="img-fluid"
                      src={data.image}
                      alt={data.icon}
                    />
                  </Nav.Link>
                </SwiperSlide>
              );
            })}
            <div className="shop-dtls-img-sldr-btn-next">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="shop-dtls-img-sldr-btn-prev">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </Swiper>
        )}
      </Tab.Container>
    </>
  );
};

export default ProductDetailsImages;

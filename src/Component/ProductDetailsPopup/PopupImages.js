import Image from "next/image";
import productDetailsImages from "./productDetailsImages.json";
import { Nav, Tab } from "react-bootstrap";
const PopupImages = () => {
  return (
    <>
      <Tab.Container defaultActiveKey={productDetailsImages[0].id}>
        <Tab.Content className="tab-content" id="myTabContent">
          {productDetailsImages &&
            Array.isArray(productDetailsImages) &&
            [...productDetailsImages].map((data, index) => {
              return (
                <Tab.Pane key={index} eventKey={data.id}>
                  <Image
                    id={`img-id-${data.id}`}
                    src={data.image}
                    alt={data.alt}
                    width={379 * 2}
                    height={450 * 2}
                    style={{ width: "370px", height: "auto" }}
                    className="img-fluid"
                    quality={100}
                  />
                </Tab.Pane>
              );
            })}
        </Tab.Content>
        <Nav as="ul" className="nav" id="myTab" role="tablist">
          {productDetailsImages &&
            Array.isArray(productDetailsImages) &&
            [...productDetailsImages].map((data, index) => {
              return (
                <Nav.Item
                  as="li"
                  key={index}
                  className="nav-item"
                  role="presentation"
                >
                  <Nav.Link
                    as="div"
                    eventKey={data.id}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                    quality={100}
                      width={82}
                      height={102}
                      src={data.icon}
                      alt="Dress 1"
                    />
                  </Nav.Link>
                </Nav.Item>
              );
            })}
        </Nav>
      </Tab.Container>
    </>
  );
};

export default PopupImages;

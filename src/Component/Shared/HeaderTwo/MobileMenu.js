import Image from "next/image";
import Link from "next/link";
import headerNavData from "./headerData/headerNavData.json";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Accordion } from "react-bootstrap";

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  const pathname = usePathname();
  return (
    <div className={`mobile-menu ${showMobileMenu ? "visible" : ""}`}>
      <div className="mobile-menu-logo">
        <div className="logo">
          <Link href="/">
            <Image
              quality={100}
              width={184}
              height={45}
              src="/image/logo/logo.png"
              alt="Elmart"
              title="Elmart"
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="mobile-menu-close">
          <Link
            href="#"
            onClick={(e) => (e.preventDefault(), setShowMobileMenu(false))}
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </Link>
        </div>
      </div>
      {/*----------------------------------
         Header Mobile Nav Section 
      ------------------------------------ */}
      <Accordion
        as="ul"
        className="p-0 bg-transparent mobile-dropdown-menu"
        alwaysOpen
      >
        {headerNavData &&
          Array.isArray(headerNavData) &&
          [...headerNavData].map((item, index) => {
            // Nav Activation Start -------------
            item.activePath = item.url;
            if (item.submenu) {
              item.submenu.map((subitem) => {
                if (subitem.url === pathname) {
                  item.activePath = subitem.url;
                  subitem.activePath = item.activePath;
                }

                if (subitem.submenu) {
                  subitem.submenu.map((subitem2) => {
                    if (subitem2.url === pathname) {
                      item.activePath = subitem2.url;
                      subitem.activePath = subitem2.url;
                      subitem2.activePath = subitem2.url;
                    }
                  });
                }
              });
            }
            // Nav Activation Start End ---------
            return (
              <Fragment key={index}>
                {!item.submenu && (
                  <li>
                    <Link
                      href={item.url}
                      className={`${
                        item.activePath === pathname ? "active" : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                )}

                {/*  ----------------------------------
                     If Have Submenu 
                   ------------------------------------ */}
                {item.submenu && (
                  <Accordion.Item eventKey={`item-${index}`} as="li">
                    <Accordion.Button as="div" style={{ content: "" }}>
                      <Link
                        className={`${
                          item.activePath === pathname ? "active" : ""
                        }`}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span>{item.title}</span>{" "}
                        <i className="fa-solid fa-chevron-down"></i>
                      </Link>
                    </Accordion.Button>
                    <Accordion.Body as="ul" className="py-0 border-0">
                      <Accordion alwaysOpen>
                        {Array.isArray(item.submenu) &&
                          [...item.submenu].map((subitem1, index) => {
                            return (
                              <Fragment key={index}>
                                {!subitem1.submenu && (
                                  <li>
                                    <Link
                                      href={subitem1.url}
                                      className={`${
                                        subitem1.activePath === pathname
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      {subitem1.title}
                                    </Link>
                                  </li>
                                )}
                                {/*  ----------------------------------
                                        If Have Submenu 
                                ------------------------------------ */}
                                {subitem1.submenu && (
                                  <Accordion.Item
                                    eventKey={`submenu1--${index}`}
                                    key={index}
                                    as="li"
                                  >
                                    <Accordion.Button as="div">
                                      <Link
                                        href={subitem1.url}
                                        onClick={(e) => e.preventDefault()}
                                        className={`${
                                          subitem1.activePath === pathname
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        <span>{subitem1.title}</span>{" "}
                                        <i className="fa-solid fa-chevron-down"></i>
                                      </Link>
                                    </Accordion.Button>
                                    <Accordion.Body as="ul" className="py-0">
                                      {Array.isArray(subitem1.submenu) &&
                                        [...subitem1.submenu].map(
                                          (subitem2, index) => {
                                            return (
                                              <li key={index}>
                                                <Link
                                                  href={subitem2.url}
                                                  className={`${
                                                    subitem2.activePath ===
                                                    pathname
                                                      ? "active"
                                                      : ""
                                                  }`}
                                                >
                                                  {subitem2.title}
                                                </Link>
                                              </li>
                                            );
                                          }
                                        )}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                )}
                              </Fragment>
                            );
                          })}
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                )}
              </Fragment>
            );
          })}
      </Accordion>
    </div>
  );
};

export default MobileMenu;

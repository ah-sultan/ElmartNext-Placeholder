"use client";
import Image from "next/image";
import headerNavData from "./headerData/headerNavData.json";
import Link from "next/link";
import { Fragment } from "react";
import { Accordion } from "react-bootstrap";
import { usePathname } from "next/navigation";

const MobileNav = ({ showMobileMenu, setShowMobileMenu }) => {
  // Defined Pathname
  const pathname = usePathname();
  const slugPath = pathname.split("/")[1];

  return (
    <>
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
              />
            </Link>
          </div>
          <div className="mobile-menu-close">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowMobileMenu(false);
              }}
            >
              <i className="fa-regular fa-circle-xmark"></i>
            </Link>
          </div>
        </div>
        {/* --------------------------------
          Header Mobile Nav Section Start
        --------------------------------- */}
        <Accordion as="ul" className="mobile-dropdown-menu" alwaysOpen>
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

              const isActive =
                (slugPath === "blog-post-details" && item.url === "/blog") ||
                (slugPath === "product-details" && item.url === "/shop")
                  ? true
                  : false;
              return (
                <Fragment key={index}>
                  {!item.submenu && (
                    <li>
                      <Link
                        className={`m-sub-menu-l2-open ${
                          item?.activePath === pathname || isActive
                            ? "active"
                            : ""
                        }`}
                        href={item.url}
                      >
                        {item.title}
                        {/* Nav Notify */}
                        {item.notification && (
                          <span
                            style={{
                              background: `${item.notification.color}`,
                              color: "#fff",
                            }}
                            className="notify"
                          >
                            {item.notification.title}
                          </span>
                        )}
                      </Link>
                    </li>
                  )}
                  {/*  ----------------------------------
                     If Have Submenu 1
                   ------------------------------------ */}
                  {item.submenu && (
                    <Accordion.Item
                      as="li"
                      eventKey={`item-${index}`}
                      className="menu-notification"
                    >
                      <Accordion.Button as="div">
                        <Link
                          href={item.title}
                          className={`m-sub-menu-l2-open ${
                            item?.activePath === pathname || isActive
                              ? "active"
                              : ""
                          }`}
                          onClick={(e) => e.preventDefault()}
                        >
                          {item.title}{" "}
                          <i className="fa-solid fa-chevron-down"></i>
                          {/* Nav Notify */}
                          {item.notification && (
                            <span
                              style={{
                                background: `${item.notification.color}`,
                              }}
                              className="notify"
                            >
                              {item.notification.title}
                            </span>
                          )}
                        </Link>
                      </Accordion.Button>
                      {/* Submenu 1 */}
                      <Accordion.Body as="ul" className="py-0">
                        <Accordion alwaysOpen>
                          {Array.isArray(item.submenu) &&
                            [...item.submenu].map((subitem1, index2) => {
                              return (
                                <Fragment key={index2}>
                                  {!subitem1.submenu && (
                                    <li>
                                      <Link
                                        href={subitem1.url}
                                        className={`m-sub-menu-l2-open ${
                                          pathname === subitem1.activePath
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
                                      as="li"
                                      eventKey={`subitem-one-${index2}`}
                                    >
                                      <Accordion.Button as="div">
                                        <Link
                                          href={subitem1.url}
                                          className={`m-sub-menu-l2-open ${
                                            pathname === subitem1.activePath
                                              ? "active"
                                              : ""
                                          }`}
                                          onClick={(e) => e.preventDefault()}
                                        >
                                          {subitem1.title}{" "}
                                          <i className="fa-solid fa-chevron-down"></i>
                                        </Link>
                                      </Accordion.Button>
                                      <Accordion.Body as="ul" className="py-0">
                                        {Array.isArray(subitem1.submenu) &&
                                          [...subitem1.submenu].map(
                                            (subitem2, index3) => {
                                              return (
                                                <li key={index3}>
                                                  <Link
                                                    href={subitem2.url}
                                                    className={`m-sub-menu-l2-open ${
                                                      pathname ===
                                                      subitem2.activePath
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
    </>
  );
};

export default MobileNav;

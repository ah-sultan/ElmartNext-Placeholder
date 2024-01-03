"use client";
import Link from "next/link";
import headerNavData from "./headerData/headerNavData.json";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
const HeaderNav = () => {
  // Defined Pathname
  const pathname = usePathname();
  const slugPath = pathname.split("/")[1];

  return (
    <>
      <nav className="nav-links">
        <ul className="main-menu">
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
                  <li
                    className={`${
                      item.notification ? "menu-notification" : ""
                    }`}
                  >
                    <Link
                      href={item.url}
                      className={`${
                        item?.activePath === pathname || isActive
                          ? "active"
                          : ""
                      }`}
                    >
                      {item.title}{" "}
                      {item.submenu && (
                        <i className="fa-solid fa-chevron-down"></i>
                      )}
                      {item.notification && (
                        <span
                          style={{ background: item.notification.color }}
                          className="notify"
                        >
                          {item.notification.title}
                        </span>
                      )}
                    </Link>
                    {/*  ----------------------------------
                     If Have Submenu 
                   ------------------------------------ */}
                    {item?.submenu && (
                      <ul className="sub-menu p-0 mt-0">
                        {Array.isArray(item.submenu) &&
                          [...item?.submenu].map((subitem, subIndex) => {
                            return (
                              <li key={subIndex}>
                                <Link
                                  href={subitem.url}
                                  className={`${
                                    subitem.activePath === pathname
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  {subitem.title}{" "}
                                  {subitem?.submenu && (
                                    <i className="fa-solid fa-chevron-right"></i>
                                  )}
                                </Link>
                                {/*  ----------------------------------
                                      If Have Submenu 2
                                  ------------------------------------ */}
                                {subitem?.submenu && (
                                  <ul className="sub-menu p-0 mt-0">
                                    {[...subitem?.submenu].map(
                                      (subitem2, subIndex2) => {
                                        return (
                                          <li key={subIndex2}>
                                            <Link
                                              href={subitem2.url}
                                              className={`${
                                                subitem2.activePath === pathname
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
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                      </ul>
                    )}
                  </li>{" "}
                </Fragment>
              );
            })}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNav;

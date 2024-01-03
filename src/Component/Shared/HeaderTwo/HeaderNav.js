"use client";
import Link from "next/link";
import headerNavData from "./headerData/headerNavData.json";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

const HeaderNav = () => {
  const pathname = usePathname();
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

              return (
                <Fragment key={index}>
                  <li key={index}>
                    <Link
                      href={item.url}
                      className={`${
                        item.activePath === pathname ? "active" : ""
                      }`}
                    >
                      {item.title}{" "}
                      {item.submenu && (
                        <i className="fa-solid fa-chevron-down"></i>
                      )}
                    </Link>

                    {/*  ----------------------------------
                            If Have Submenu 1
                        ------------------------------------ */}
                    {item.submenu && (
                      <ul className="sub-menu p-0 mt-0">
                        {Array.isArray(item.submenu) &&
                          [...item.submenu].map((item2, index2) => {
                            return (
                              <li key={index2}>
                                <Link
                                  href={item2.url}
                                  className={`${
                                    item2.activePath === pathname ? "active" : ""
                                  }`}
                                >
                                  {item2.title}{" "}
                                  {item2.submenu && (
                                    <i className="fa-solid fa-chevron-right"></i>
                                  )}
                                </Link>

                                {/*  ----------------------------------
                                      If Have Submenu 2
                                    ------------------------------------ */}
                                {item2.submenu && (
                                  <ul className="sub-menu p-0 mt-0">
                                    {item2.submenu &&
                                      Array.isArray(item2.submenu) &&
                                      [...item2.submenu].map(
                                        (item3, index3) => {
                                          return (
                                            <li key={index3}>
                                              <Link
                                                href={item2.url}
                                                className={`${
                                                  item3.activePath === pathname
                                                    ? "active"
                                                    : ""
                                                }`}
                                              >
                                                {item3.title}
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

import Link from "next/link";
import mobileMenuData from "./mobileMenuData/mobileMenuData.json";
import AccMenuItem from "../../AccMenu/AccMenuItem";
import { Fragment } from "react";
import AccMenuButton from "../../AccMenu/AccMenuButton";
import AccMenuBody from "../../AccMenu/AccMenuBody";
const MobileAccordionMenu = () => {
  return (
    <>
      <ul className="accordion-menu">
        {mobileMenuData &&
          Array.isArray(mobileMenuData) &&
          [...mobileMenuData].map((item, index) => {
            return (
              <Fragment key={index}>
                {!item.submenu && (
                  <li>
                    <Link href={item.url} className="dropdownlink">
                      <i className={item.icon}></i>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )}

                {item.submenu && (
                  <AccMenuItem as="li" activeclassName="open">
                    <AccMenuButton as="div" className="dropdownlink">
                      <i className={item.icon} aria-hidden="true"></i>
                      <span>{item.title}</span>
                      <i
                        className="fa-solid fa-chevron-down"
                        aria-hidden="true"
                      ></i>
                    </AccMenuButton>
                    {/* Sub Menu 1 */}
                    <AccMenuBody as="ul" className="submenuItems d-block">
                      {Array.isArray(item.submenu) &&
                        [...item.submenu].map((subitem1, index) => {
                          return (
                            <Fragment key={index}>
                              {!subitem1.submenu && (
                                <li>
                                  <Link className="" href={subitem1.url}>
                                    {subitem1.title}
                                  </Link>
                                </li>
                              )}
                              {subitem1.submenu && (
                                <AccMenuItem as="li" activeclassName="open">
                                  <AccMenuButton
                                    as="div"
                                    className="dropdownlink"
                                  >
                                    <span>{subitem1.title}</span>
                                    <i
                                      className="fa-solid fa-chevron-down"
                                      aria-hidden="true"
                                    ></i>
                                  </AccMenuButton>
                                  <AccMenuBody
                                    as="ul"
                                    className="submenuItems d-block"
                                  >
                                    {Array.isArray(subitem1.submenu) &&
                                      [...subitem1.submenu].map(
                                        (subitem2, index) => {
                                          return (
                                            <li key={index}>
                                              <Link href={subitem2.url}>
                                                {subitem2.title}
                                              </Link>
                                            </li>
                                          );
                                        }
                                      )}
                                  </AccMenuBody>
                                </AccMenuItem>
                              )}
                            </Fragment>
                          );
                        })}
                    </AccMenuBody>
                  </AccMenuItem>
                )}
              </Fragment>
            );
          })}
      </ul>
    </>
  );
};

export default MobileAccordionMenu;

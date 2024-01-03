import Link from "next/link";
import desktopMenuData from "./HeaderData/headerDesktopMenu";

const HeaderDesktopMenu = () => {
  return (
    <>
      <ul id="desktop_menu" className="navbar-nav navbar-light menu-main">
        {desktopMenuData &&
          Array.isArray(desktopMenuData) &&
          [...desktopMenuData].map((menu, index) => {
            return (
              <li
                key={index}
                className={`nav-item ${
                  menu.megaMenu ? "menu-item-has-children" : ""
                } ${menu.submenu ? "has-submenu" : ""}`}
              >
                <Link href={menu.url} className="nav-link active">
                  {menu.title}{" "}
                  {(menu.megaMenu || menu.submenu) && (
                    <i className="fa-solid fa-angle-down"></i>
                  )}
                </Link>

                {menu.submenu && (
                  <ul className="sub-menu">
                    {Array.isArray(menu.submenu) &&
                      menu.submenu.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link href={item.url}>{item.title}</Link>
                          </li>
                        );
                      })}
                  </ul>
                )}

                {/* -----------------------
                  Mega Menu Section Start
                ---------------------------*/}
                {menu.megaMenu && (
                  <div
                    className={`sub-menu mega-menu mega-menu-column-4 ${
                      menu.title.toLowerCase() === "shop" ? "" : "row"
                    } `}
                  >
                    {menu.megaMenu &&
                      Array.isArray(menu.megaMenu) &&
                      [...menu.megaMenu].map((megaMenu, index1) => {
                        return (
                          <div
                            key={index1}
                            className={`list-item ${
                              menu.title.toLowerCase() === "shop" ? "" : "col-3"
                            }`}
                          >
                            <h4 className="title">{megaMenu.heading}</h4>
                            <ul className="ps-0 mt-3">
                              {megaMenu.nav &&
                                Array.isArray(megaMenu.nav) &&
                                [...megaMenu.nav].map((navItems, index2) => {
                                  return (
                                    <li key={index2}>
                                      <Link
                                        href={navItems.url}
                                        id={
                                          navItems.sale
                                            ? "sale"
                                            : "" || navItems.hot_sale
                                            ? "hot_sale"
                                            : ""
                                        }
                                      >
                                        {navItems.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        );
                      })}
                  </div>
                )}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default HeaderDesktopMenu;

"use client";
import "./mega-menu.css";
import HeaderTop from "./HeaderTop";
import headerProductCtg from "./HeaderData/headerProductCategory.json";
import Link from "next/link";
import Image from "next/image";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect, useState } from "react";
import CartSlide from "@/Component/CartSection/CartSlide/CartSlide";

const HeaderThree = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showCartSlide, setShowCartSlide] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Handle Sticky Nav
  const stickyNavHandler = () => {
    window.pageYOffset > 5 ? setSticky(true) : setSticky(false);
  };

  // Use Effect
  useEffect(() => {
    window.addEventListener("scroll", stickyNavHandler);
  }, [sticky]);
  return (
    <>
      <header id="header" className={`${sticky ? "sticky_animation" : ""} header-three`}>
        <div className="container-fluid container-xl">
          <HeaderTop
            setShowSearchBox={setShowSearchBox}
            setShowCartSlide={setShowCartSlide}
          />

          <nav className="navbar navbar-expand-lg justify-content-between">
            {/* <!-- vertical category start --> */}
            <div className=" vertical_category d-none d-lg-flex ">
              <div className="vertical_category_wrapper ">
                <div className="v_category_handler d-flex justify-content-between align-items-center ">
                  <i className="fa-solid fa-list mb-0 pb-0 "></i>
                  <span className="v_category_title">PRODUCT CATEGORIES</span>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <ul id="category_list" className="v_category_items ps-0 ">
                  {[...headerProductCtg]?.map((category, index) => {
                    return (
                      <li key={index}>
                        <div className="category_title">
                          <i className={`${category.icon}`}></i>{" "}
                          <span>{category.title}</span>
                          <div className="product_mega_menu" id="product_menu">
                            <div className="product_mega_menu_wrapper d-flex justify-content-between p-3">
                              <div className="row flex-wrap ">
                                {category.megaMenu &&
                                  Array.isArray(category.megaMenu) &&
                                  [...category.megaMenu].map((menu, index) => {
                                    return (
                                      <div key={index} className="col-3">
                                        <ul className="menu_inner_item ps-0 ">
                                          <h4>{menu.title}</h4>

                                          {menu.nav &&
                                            Array.isArray(menu.nav) &&
                                            [...menu.nav].map(
                                              (navItems, index) => {
                                                return (
                                                  <li key={index}>
                                                    <Link href={navItems.url}>
                                                      {navItems.title}
                                                    </Link>
                                                  </li>
                                                );
                                              }
                                            )}
                                        </ul>
                                      </div>
                                    );
                                  })}
                                {category.image && (
                                  <div className="col-6">
                                    <div className="menu_inner_item">
                                      <Image
                                        quality={100}
                                        width={600}
                                        height={400}
                                        src={category.image}
                                        alt="Product Announcement"
                                        className="img-fluid"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <i className="fa-solid fa-angle-right"></i>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <HeaderDesktopMenu />

            <div className="link_menu d-none d-lg-flex align-items-center justify-content-end">
              <ul className="d-flex justify-content-between align-items-center ps-0 mb-0">
                <li className="list-unstyled me-3">
                  <Link href="#">New Arrivals</Link>
                </li>
                <li className="list-unstyled me-3">
                  <Link className="deal-today-button button-a" href="#">
                    <i className="fa-solid fa-bolt-lightning"></i> Deals Today
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <SearchBox
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
      <CartSlide
        showCartSlide={showCartSlide}
        setShowCartSlide={setShowCartSlide}
      />
    </>
  );
};

export default HeaderThree;

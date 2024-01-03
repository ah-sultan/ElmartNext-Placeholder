"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";
import CartSlide from "@/Component/CartSection/CartSlide/CartSlide";
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCartSlide, setShowCartSlide] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  return (
    <>
      <header className="header-section">
        <div className="container">
          <HeaderTop />
          <div className="row align-items-center main-header-v2">
            {/* <!-- Logo --> */}
            <div className="col-xl-3 col-lg-3 col-md-2 col-5 p-0">
              <div className="logo-v2">
                <Link href="./">
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
            </div>
            {/* <!-- Main Menu --> */}
            <div className="col-xl-6 col-lg-7 col-md-8 col-1 p-0">
              <HeaderNav />
            </div>
            <div className="col-xl-3 col-lg-2 col-md-2 col-6 p-0">
              {/* <!--Menu Right--> */}
              <ul className="menu-right">
                <li className="search-box-btn">
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(), setShowSearchBox(true);
                    }}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Link>
                </li>
                &nbsp;
                <li>
                  <Link href="/login-register">
                    <i className="fa-regular fa-circle-user"></i>
                  </Link>
                </li>
                &nbsp;
                <li className="has-notification">
                  <Link href="/wishlist">
                    <i className="fa-regular fa-heart"></i>
                    <span className="notify-count">4</span>
                  </Link>
                </li>
                &nbsp;
                <li className="has-notification">
                  <Link
                    className="cart-view"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(), setShowCartSlide(true);
                    }}
                  >
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="notify-count">2</span>
                  </Link>
                </li>
                &nbsp;
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(), setShowMobileMenu(true);
                    }}
                    className="mobile-menu-toggle"
                  >
                    <i className="fa-solid fa-bars"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      <CartSlide
        showCartSlide={showCartSlide}
        setShowCartSlide={setShowCartSlide}
      />
      <SearchBox
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
    </>
  );
};

export default Header;

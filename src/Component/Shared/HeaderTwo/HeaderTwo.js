"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import CartSlide from "@/Component/CartSection/CartSlide/CartSlide";
import SearchBox from "../SearchBox/SearchBox";
import LoginRegisterSlide from "@/Component/Auth/LoginRegisterSlide/LoginRegisterSlide";

const HeaderTwo = () => {
  const [showCartSlide, setShowCartSlide] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLoginRegister, setShowLoginRegister] = useState(false);
  return (
    <>
      <header>
        <div className="container main-header">
          <div className="row align-items-center">
            {/* <!-- Logo --> */}
            <div className="col-xl-3 col-lg-3 col-md-2 col-5 p-0">
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
                </li>{" "}
                <li>
                  <Link
                    id="log-reg-sld-in-btn"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(), setShowLoginRegister(true);
                    }}
                  >
                    <i className="fa-regular fa-circle-user"></i>
                  </Link>
                </li>{" "}
                <li className="has-notification">
                  <Link href="/wishlist">
                    <i className="fa-regular fa-heart"></i>
                    <span className="notify-count">0</span>
                  </Link>
                </li>{" "}
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
                </li>{" "}
                <li>
                  <Link
                    href="#"
                    className="mobile-menu-toggle"
                    onClick={(e) => {
                      e.preventDefault(), setShowMobileMenu(true);
                    }}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <CartSlide
        showCartSlide={showCartSlide}
        setShowCartSlide={setShowCartSlide}
      />
      <SearchBox
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <LoginRegisterSlide
        showLoginRegister={showLoginRegister}
        setShowLoginRegister={setShowLoginRegister}
      />
    </>
  );
};

export default HeaderTwo;

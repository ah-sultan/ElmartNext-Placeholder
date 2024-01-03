import Image from "next/image";
import HeaderSearchForm from "./HeaderSearchForm";
import MobileMenu from "./MobileMenu/MobileMenu";
import Link from "next/link";
import { useState } from "react";

const HeaderTop = ({ setShowSearchBox, setShowCartSlide }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <div className="top_header d-flex justify-content-between align-items-center ">
        <div className="logo">
          {/* Brand Logo */}
          <Link className="navbar-brand" href="/">
            <Image
              quality={100}
              src="/image/logo/logo.png"
              className="img-fluid"
              alt="Elmart - Logo"
              width={184}
              height={45}
            />
          </Link>
        </div>
        <HeaderSearchForm />
        <div className="woocommerce_area">
          <ul className="woocommerce_options align-items-center justify-content-end mb-0 ps-0">
            <li className="search-box-btn list-unstyled search_icon d-unset d-lg-none">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault(), setShowSearchBox(true);
                }}
              >
                <i className="fa-solid fa-magnifying-glass "></i>
              </Link>
            </li>
            <li className="list-unstyled">
              <Link id="user_join_icon" href="/login-register">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
            <li id="product_item" className="list-unstyled cart-view">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault(), setShowCartSlide(true);
                }}
              >
                <i className="fa-solid fa-bag-shopping"></i>
              </Link>
            </li>
            <li className="list-unstyled item-top-right-header3">
              <span>$</span>90.00
            </li>
            <li className="list-unstyled item-top-right-header3">
              <Link href="#">
                <i className="fa-solid fa-shuffle"></i>
              </Link>
            </li>
            <li className="list-unstyled product_like_list">
              <Link href="/wishlist">
                <i className="fa-regular fa-heart"></i>
              </Link>
            </li>
            <button
              className="btn d-block d-lg-none"
              type="button"
              onClick={() => setShowMobileNav(true)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <MobileMenu
              setShowMobileNav={setShowMobileNav}
              showMobileNav={showMobileNav}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;

"use client";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import MobileMenuSearchForm from "./MobileMenuSearchForm";
import MobileAccordionMenu from "./MobileAccordionMenu";
import MobileMenuCategory from "./MobileMenuCategory";
import { useState } from "react";
import Link from "next/link";
import { Tab, TabContent } from "react-bootstrap";
const MobileMenu = ({ showMobileNav, setShowMobileNav }) => {
  const [activeTab, setActiveTab] = useState("menu");

  // Handle Offcanvas
  const handleClose = () => {
    setShowMobileNav(false);
  };
  return (
    <>
      <Offcanvas
        show={showMobileNav}
        onHide={handleClose}
        style={{ maxWidth: "300px" }}
        className="woocommerce_options"
      >
        <div className="offcanvas_close_btn" onClick={handleClose}>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <Offcanvas.Body className="offcanvas-body pt-50">
          <div className="home-page-three">
            <MobileMenuSearchForm />
            <Tab.Container defaultActiveKey="menu">
              <Nav
                as="ul"
                className="nav nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <Nav.Item as="li" className="nav-item col-6">
                  <Nav.Link eventKey="menu" as="button" className="nav-link w-100">
                    Menu
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item col-6">
                  <Nav.Link
                    eventKey="categories"
                    as="button"
                    className="nav-link w-100"
                  >
                    Categories
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent className="tab-content">
                <Tab.Pane eventKey="menu">
                  <MobileAccordionMenu />
                </Tab.Pane>
                <Tab.Pane eventKey="categories">
                  <MobileMenuCategory />
                </Tab.Pane>
              </TabContent>
            </Tab.Container>
            <Link className="deal-today-button button-a" href="/">
              <i className="fa-solid fa-bolt-lightning"></i> Deals Today
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileMenu;

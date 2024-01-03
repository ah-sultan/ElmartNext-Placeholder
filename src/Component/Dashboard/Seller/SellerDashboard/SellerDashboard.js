"use client";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import sellerDashBoardNavData from "./sellerDashBoardNavData.json";
import UserSnap from "../../UserSnap/UserSnap";
import ProductsTab from "../ProductsTab/ProductsTab";
import OrdersTab from "../OrdersTab/OrdersTab";
import ProfileTab from "../ProfileTab/ProfileTab";
import SettingsTab from "../SettingsTab/SettingsTab";
import { useState } from "react";
import HomeTab from "../HomeTab/HomeTab";
import DeleteModal from "@/Component/widgets/Modals/DeleteModal";

const SellerDashboard = () => {
  const [showLogOutPopup, setShowLogOutPopup] = useState(false);

  // Const handle Logout
  const handleLogout = () => {};

  return (
    <>
      <section className="seller-dashboard-section">
        <div className="container">
          <Tab.Container defaultActiveKey="home">
            <div className="row">
              <div className="d-flex align-items-start seller-dshbrd-wrap">
                {/* Tab nav links */}
                <Nav
                  variant="pills"
                  className="nav flex-column nav-pills me-3"
                  id="seller-dashboard-tab"
                >
                  <UserSnap
                    name="Lady Apparel"
                    email="lady.apparel@demo.com"
                    userImage="/image/seller-dashboard/seller1.png"
                  />
                  {sellerDashBoardNavData &&
                    Array.isArray(sellerDashBoardNavData) &&
                    [...sellerDashBoardNavData].map((data, index) => {
                      return (
                        <Nav.Link
                          as="button"
                          key={index}
                          eventKey={data.eventKey}
                        >
                          <i className={data.icon}></i>
                          {data.title}
                        </Nav.Link>
                      );
                    })}
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => setShowLogOutPopup(true)}
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Log Out
                  </button>
                </Nav>
                {/* Tab Content Section */}
                <Tab.Content
                  className="seller-dashboard-tabContent"
                  id="seller-dashboard-tabContent"
                >
                  <Tab.Pane eventKey="home">
                    <HomeTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="products">
                    <ProductsTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="orders">
                    <OrdersTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="profile">
                    <ProfileTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="settings">
                    <SettingsTab />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
      <DeleteModal
        handleDelete={handleLogout}
        warningMessage="Are Your Sure?"
        successMessage="Logout Successfully!"
        showModal={showLogOutPopup}
        setShowModal={setShowLogOutPopup}
      />
    </>
  );
};

export default SellerDashboard;

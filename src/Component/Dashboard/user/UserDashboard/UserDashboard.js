"use client";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import userDashBoardNavData from "./userDashBoardNavData";
import UserSnap from "../../UserSnap/UserSnap";
import HomeTab from "../HomeTab/HomeTab";
import OrdersTab from "../OrdersTab/OrdersTab";
import WishlistTab from "../WishlistTab/WishlistTab";
import SavedCardTab from "../SavedCardTab/SavedCardTab";
import AddressTab from "../AddressTab/AddressTab";
import ProfileTab from "../ProfileTab/ProfileTab";
import SecurityTab from "../SecurityTab/SecurityTab";

const UserDashboard = () => {
  return (
    <>
      <section className="user-dashboard-section">
        <div className="container">
          <Tab.Container defaultActiveKey="home">
            <div className="row">
              <div className="d-flex align-items-start user-dshbrd-wrap">
                {/* Tab nav links */}
                <Nav
                  variant="pills"
                  className="nav flex-column nav-pills me-3"
                  id="user-dashboard-tab"
                >
                  <UserSnap
                    userImage="/image/user-dashboard/user.png"
                    email="user.example@gmail.com"
                    name="Ronal M. Griffim"
                  />
                  {userDashBoardNavData &&
                    Array.isArray(userDashBoardNavData) &&
                    [...userDashBoardNavData].map((data, index) => {
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
                </Nav>
                {/* Tab Content Section */}
                <Tab.Content
                  className="user-dashboard-tabContent"
                  id="user-dashboard-tabContent"
                >
                  <Tab.Pane eventKey="home">
                    <HomeTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="orders">
                    <OrdersTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="wishlist">
                    <WishlistTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="savedCards">
                    <SavedCardTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="address">
                    <AddressTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="profile">
                    <ProfileTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="security">
                    <SecurityTab />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;

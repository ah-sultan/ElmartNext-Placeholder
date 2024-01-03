"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ShopProdDesc from "./ShopProdDesc";
import ShopProdReview from "./ShopProdReview";
import CommentForm from "@/Component/CommentSection/CommentForm/CommentForm";

const ShopProdRevDesc = () => {
  const [key, setKey] = useState("description");
  return (
    <>
      <section className="review-desc-section">
        <div className="container">
          <div className="row">
            <div className="col-12 rev-desc-wrap">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="description" title="Description">
                  <ShopProdDesc />
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <ShopProdReview />
                </Tab>
              </Tabs>

              <CommentForm
                isRating={true}
                className={`give-review-form ${
                  key === "reviews" ? "show" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopProdRevDesc;

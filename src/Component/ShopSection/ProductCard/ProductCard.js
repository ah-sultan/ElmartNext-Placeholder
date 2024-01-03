"use client"

import { memo } from "react";
import FeatureCatCard from "./FeatureCatCard";
import ShopCatCard from "./ShopCatCard";

const ProductCard = (props) => {
  const handleProdDetailsPopup = (e) => {
    props.setShowPopupDetails(false);
  };

  if (props.cardType === "shop") {
    return <ShopCatCard {...props}  handleProdDetailsPopup={handleProdDetailsPopup}/>;
  } else if (props.cardType === "feature") {
    return (
      <FeatureCatCard
        {...props}
        handleProdDetailsPopup={handleProdDetailsPopup}
      />
    );
  } else {
    return "";
  }
};

export default memo(ProductCard);

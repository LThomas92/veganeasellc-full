import React from "react";
import MealPlanItem from "../MealPlanItem";

const ShopPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="collection-preview__title">{title}</h2>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 3)
        .map(item => (
          <MealPlanItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ShopPreview;
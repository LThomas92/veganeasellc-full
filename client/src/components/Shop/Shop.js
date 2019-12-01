import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../CollectionsOverview/Collections-Overview";
import MealPlanForm5 from "../Order/MealPlanForm5";
import MealPlanForm7 from "../Order/MealPlanForm7";
import MealPlanForm30 from "../Order/MealPlanForm30";

const ShopPage = ({ match }) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:mealPlanId`} component={MealPlanForm5} />
      <Route path={`${match.path}/:mealPlanId`} component={MealPlanForm7} />
      <Route path={`${match.path}/:mealPlanId`} component={MealPlanForm30} />
    </div>
  );
};

export default ShopPage;

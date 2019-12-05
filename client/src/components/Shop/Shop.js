import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

const CollectionsOverview = lazy(() =>
  import("../CollectionsOverview/Collections-Overview")
);
const MealPlanForm5 = lazy(() => import("../Order/MealPlanForm5"));
const MealPlanForm7 = lazy(() => import("..//Order/MealPlanForm7"));
const MealPlanForm30 = lazy(() => import("..//Order/MealPlanForm30"));

const ShopPage = ({ match }) => {
  return (
    <div className="shop">
      <Suspense fallback={<div>...Loading</div>}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:mealPlanId`} component={MealPlanForm5} />
        <Route path={`${match.path}/:mealPlanId`} component={MealPlanForm7} />
        <Route path={`${match.path}/:mealPlanId`} component={MealPlanForm30} />
      </Suspense>
    </div>
  );
};

export default ShopPage;

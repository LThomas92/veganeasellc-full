import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../actions/cartActions";

const MealPlanItem = ({ item, addItem }) => {
  const { title, price, desc, image, id } = item;
  return (
    <div className="mealplan-item">
      <div className="mealplan-item__image-box">
        <img className="mealplan-item__image" src={image} alt="Meal Plan" />
      </div>
      <div className="mealplan-item__text">
        <h3>{title}</h3>
        <p>{desc}</p>
        <p className="mealplan-item__text--price">${price}</p>
        <div className="mealplan-btn-box">
          <button onClick={() => addItem(item)} className="btn">
            ADD TO CART
          </button>
          {id === 1 ? (
            <Link style={{ textDecoration: "none" }} to="/shop/meal-plan-5">
              <button className="btn">CHOOSE OPTIONS</button>
            </Link>
          ) : (
            <div />
          )}
          {id === 2 ? (
            <Link style={{ textDecoration: "none" }} to="/shop/meal-plan-7">
              <button className="btn">CHOOSE OPTIONS</button>
            </Link>
          ) : (
            <div />
          )}
          {id === 3 ? (
            <Link style={{ textDecoration: "none" }} to="/shop/meal-plan-30">
              <button className="btn">CHOOSE OPTIONS</button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(MealPlanItem);

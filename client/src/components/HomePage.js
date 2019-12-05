import React from "react";
import Breakfast from "../img/breakfast-meal.jpg";
import Lunch from "../img/lunch-meal.jpg";
import Snack from "../img/snack-meal.jpg";
import MealPlan1 from "../img/mealplan-1.jpg";
import MealPlan2 from "../img/mealplan-2.jpg";
import MealPlan3 from "../img/mealplan-3.jpg";
import Star from "../img/star.svg";

import LazyLoad from "react-lazyload";

const HomePage = () => {
  document.title = "Home | Veganease";
  return (
    <div className="home-container">
      <div className="home-page-header">
        <div className="home-page-header__box">
          <h1 className="home-page-header__title">Welcome To Veganease!</h1>
          <p className="home-page-header__text">
            <em>Vegan Made Easy For You</em>
          </p>
        </div>
      </div>

      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How It Works</h2>
        <div className="meal-options-container">
          <h3 className="meal-title">Meal Options</h3>
          <p className="meal-small-text">Step 1: Personalize each meal</p>
          <div className="grid-container">
            <div className="meal-options-card">
              <LazyLoad height={"100%"}>
                <img src={Breakfast} alt="Breakfast" />
              </LazyLoad>
              <h3 className="meal-options-card__title">Break Your Fast</h3>
              <p className="meal-options-card__text">
                choose one item per day.
              </p>
            </div>
            <div className="meal-options-card">
              <LazyLoad height={"100%"}>
                <img src={Lunch} alt="Breakfast" />
              </LazyLoad>
              <h3 className="meal-options-card__title">Lunch/Dinner</h3>
              <p className="meal-options-card__text">
                mix and match main and side dishes to make one lunch and one
                dinner per day.{" "}
              </p>
            </div>
            <div className="meal-options-card">
              <LazyLoad height={"100%"}>
                <img src={Snack} alt="Breakfast" />
              </LazyLoad>
              <h3 className="meal-options-card__title">Snacks</h3>
              <p className="meal-options-card__text">
                choose two snacks per day.
              </p>
            </div>
          </div>
        </div>
        <div className="meal-options-container">
          <h3 className=" meal-title meal-title--2">Meal Plans</h3>
          <p className="meal-small-text">Step 2: Choose duration of service</p>
          <div className="grid-container">
            <div className="meal-options-card">
              <LazyLoad height={"100%"}>
                <img src={MealPlan1} alt="Meal Plan 1" />
              </LazyLoad>
              <h3 className="meal-options-card__title">5-Day Plan</h3>
              <p className="meal-options-card__text">
                Includes 15 meals, 5 snacks.
              </p>
            </div>
            <div className="meal-options-card">
              <LazyLoad height={"100%"}>
                <img src={MealPlan2} alt="Meal Plan 2" />
              </LazyLoad>
              <h3 className="meal-options-card__title">7-Day Plan</h3>
              <p className="meal-options-card__text">
                Includes 21 meals, 7 snacks.
              </p>
            </div>
            <div className="meal-options-card">
              <LazyLoad height={"100%"}>
                <img src={MealPlan3} alt="Meal Plan 3" />
              </LazyLoad>
              <h3 className="meal-options-card__title">30-Day Plan</h3>
              <p className="meal-options-card__text">
                <b>BEST OFFER!</b> Includes 90 meals, 30 snacks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="how-it-works-bottom-text">
        * Delivered weekly on the following Sunday after order is placed.
      </p>
      <React.Fragment>
        <h2 className="reviews-section-title">Reviews</h2>
        <div className="review-grid-container">
          <div className="review-card">
            <ul className="star-icon-list">
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
            </ul>

            <h5 className="review-card__title">It's Soooo Good!</h5>
            <p className="review-card__text">
              "I can tell it's all FRESH! It's soooo good, makes me think why
              I'm still eating meat..."
            </p>
            <p className="review-card__name">
              Elaina L. &nbsp;<span>9/22/2019</span>
            </p>
          </div>
          <div className="review-card">
            <ul className="star-icon-list">
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
            </ul>

            <h5 className="review-card__title">I'm in Love!</h5>
            <p className="review-card__text">
              "Thank you so much. Going through the bags rn. The strawberries
              are delicious. You really are talented. And beautiful, inside and
              out."
            </p>
            <p className="review-card__name">
              Stephanie M. &nbsp;<span>9/29/2019</span>
            </p>
          </div>
          <div className="review-card">
            <ul className="star-icon-list">
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
              <li>
                <img src={Star} alt="star-icon" className="star-icon" />
              </li>
            </ul>

            <h5 className="review-card__title">I was nervous at first!</h5>
            <p className="review-card__text">
              "I finally got my vegan mac n cheese & I ate it for breakfast! I'm
              a newbie so I purchased the 5 day meal plan, and each item looks
              so yummy so far! I had the stuffed peppers too. They were so
              good!"
            </p>
            <p className="review-card__name">
              Shellz P. &nbsp;<span>10/27/2019</span>
            </p>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default HomePage;

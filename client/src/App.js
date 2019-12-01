import React from "react";
import "./App.scss";
import { createStructuredSelector } from "reselect";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import MealPlanForm5 from "./components/Order/MealPlanForm5";
import MealPlanForm7 from "./components/Order/MealPlanForm7";
import MealPlanForm30 from "./components/Order/MealPlanForm30";
import SignIn from "./authentication/SignIn";
import Shop from "./components/Shop/Shop";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Checkout from "./components/Checkout/Checkout";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { auth, createUserProfileDocument } from "./firebase/fireBaseUtils";

import { setCurrentUser } from "./actions/userActions";
import { selectCurrentUser } from "./components/User/User-Selector";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/shop/meal-plan-5" exact component={MealPlanForm5} />
        <Route path="/shop/meal-plan-7" exact component={MealPlanForm7} />
        <Route path="/shop/meal-plan-30" exact component={MealPlanForm30} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route
          exact
          path="/sign-in"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignIn />
          }
        />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/checkout" exact component={Checkout} />
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

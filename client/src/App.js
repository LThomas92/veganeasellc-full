import React, { lazy, Suspense } from "react";
import "./App.scss";
import { createStructuredSelector } from "reselect";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SignIn from "./authentication/SignIn";

import ContactUs from "./components/ContactUs";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { auth, createUserProfileDocument } from "./firebase/fireBaseUtils";

import { setCurrentUser } from "./actions/userActions";
import { selectCurrentUser } from "./components/User/User-Selector";

const HomePage = lazy(() => import("./components/HomePage"));
const Menu = lazy(() => import("./components/Menu"));
const MealPlanForm5 = lazy(() => import("./components/Order/MealPlanForm5"));
const MealPlanForm7 = lazy(() => import("./components/Order/MealPlanForm7"));
const MealPlanForm30 = lazy(() => import("./components/Order/MealPlanForm30"));
const Shop = lazy(() => import("./components/Shop/Shop"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Checkout = lazy(() => import("./components/Checkout/Checkout"));

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
        <Suspense fallback={<div>....Loading</div>}>
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
        </Suspense>
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

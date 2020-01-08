import React from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { selectCurrentUser } from "../User/User-Selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Swal from "sweetalert2";

class MealPlanForm30 extends React.Component {
  state = {
    breakfast: [],
    lunch: [],
    snacks: [],
    delivery: [],
    text: "",
    weekdayOption: new Date(),
    breakfastOption: "",
    lunchOption: "",
    snackOption: "",
    deliveryOption: ""
  };

  componentDidMount() {
    this.setState({
      breakfast: [
        { name: "FRUIT BOWL" },
        { name: "FLAXMEAL PORRIDGE" },
        { name: "CORNMEAL PORRIDGE" },
        { name: "POST WORKOUT QUINOA BOWL" },
        { name: "BANANA OATMEAL CUPS (2)" }
      ],
      lunch: [
        { name: "PROTEIN POWERHOUSE" },
        { name: "SESAME EGGPLANT STIR-FRY 'N' ZOODLES" },
        { name: "COCONUT CURRY CHICKPEAS" },
        { name: "STUFFED PEPPERS" },
        { name: "ALT WRAP" },
        { name: "SPAGHETTI 'NO' MEATBALLS" },
        { name: "ROASTED GARLIC ASPARAGUS" },
        { name: "LENTIL SOUP" },
        { name: "PASTA SALAD" }
      ],
      snacks: [
        { name: "AGAVE CHILI POPCORN" },
        { name: "CINNAMON SWEET POTATO CHIPS" },
        { name: "BERRIES" },
        { name: "PB & C" }
      ],
      delivery: [{ deliveryOption: "Delivery" }, { deliveryOption: "Pick Up" }]
    });
  }

  onChange = weekdayOption => this.setState({ weekdayOption });

  onChangeBreakfast = e => {
    this.setState({
      breakfastOption: e.target.value
    });
  };

  onChangeLunch = e => {
    this.setState({
      lunchOption: e.target.value
    });
  };

  onChangeSnack = e => {
    this.setState({
      snackOption: e.target.value
    });
  };

  onChangeText = e => {
    this.setState({
      text: e.target.value
    });
  };

  onChangeDelivery = e => {
    this.setState({
      deliveryOption: e.target.value
    });
  };

  noti() {
    Swal.fire({
      title: "SUCCESS!",
      text: "Your order has been submitted!",
      icon: "success",
      confirmButtonText: "OK"
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const weekdayOption = this.state.weekdayOption.toLocaleDateString();
    const breakfastOption = this.state.breakfastOption;
    const lunchOption = this.state.lunchOption;
    const snackOption = this.state.snackOption;
    const deliveryOption = this.state.deliveryOption;
    const text = this.state.text;
    const currentUser = this.props.currentUser.displayName;

    axios({
      method: "POST",
      url: "/api/send",
      data: {
        weekdayOption: weekdayOption,
        breakfastOption: breakfastOption,
        lunchOption: lunchOption,
        snackOption: snackOption,
        deliveryOption: deliveryOption,
        text: text,
        currentUser: currentUser
      }
    }).then(response => {
      console.log(response);
    });
  };

  render() {
    document.title = "30-Day Meal Plan Options | Veganease ";
    const { breakfast } = this.state;
    const { lunch } = this.state;
    const { snacks } = this.state;
    const { delivery } = this.state;

    let breakfastList =
      breakfast.length > 0 &&
      breakfast.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      }, this);

    let lunchList =
      lunch.length > 0 &&
      lunch.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      }, this);

    let snackList =
      snacks.length > 0 &&
      snacks.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      }, this);

    let deliveryList =
      delivery.length > 0 &&
      delivery.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.deliveryOption}
          </option>
        );
      }, this);

    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} id="mealplan-form">
          <h2>30-Day Meal Plan Form</h2>
          <h3>Choose Date</h3>
          <Calendar
            className="calender"
            onChange={this.onChange}
            value={this.state.weekdayOption}
          />
          <h3>Choose a Breakfast Option</h3>
          <select onChange={this.onChangeBreakfast}>{breakfastList}</select>
          <h3>Choose a Lunch/Dinner Option</h3>
          <select onChange={this.onChangeLunch}>{lunchList}</select>
          <h3>Choose a Snack Option</h3>
          <select onChange={this.onChangeSnack}>{snackList}</select>
          <div className="textarea-container">
            <h3>Add Additional Details</h3>
            <textarea
              placeholder="Add Any Additional Details...."
              onChange={this.onChangeText}
              rows="5"
            ></textarea>
          </div>
          <div className="delivery-container">
            <h3>Choose Delivery Method</h3>
            <select onChange={this.onChangeDelivery}>{deliveryList}</select>
          </div>
          <button onClick={this.noti} type="submit" className="btn">
            Submit
          </button>
        </form>
        <p>
          *Please make sure you are SIGNED IN before order has been submitted
        </p>
        <p>*Enter Each Order By Day Then Press Submit</p>
        <p>
          *For PICKUP Orders. Please contact Vanessa W. via phone or email to
          coordinate.
        </p>
        <p>*Billing Address will be used for Deliveries</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(MealPlanForm30);

import React from "react";
import AxiosAPI from "../AxiosAPI";
import { selectCurrentUser } from "../User/User-Selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import swal from "sweetalert";

class MealPlanForm5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast: [],
      lunch: [],
      snacks: [],
      days: [],
      delivery: [],
      text: "",
      weekdayOption: "",
      breakfastOption: "",
      lunchOption: "",
      snackOption: "",
      deliveryOption: ""
    };
  }

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
      days: [
        { weekDay: "Monday" },
        { weekDay: "Tuesday" },
        { weekDay: "Wedensday" },
        { weekDay: "Thursday" },
        { weekDay: "Friday" }
      ],
      delivery: [{ deliveryOption: "Delivery" }, { deliveryOption: "Pick Up" }]
    });
  }

  onChangeWeekday = e => {
    this.setState({
      weekdayOption: e.target.value
    });
  };

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

  onSubmit = e => {
    e.preventDefault();
    const weekdayOption = this.state.weekdayOption;
    const breakfastOption = this.state.breakfastOption;
    const lunchOption = this.state.lunchOption;
    const snackOption = this.state.snackOption;
    const deliveryOption = this.state.deliveryOption;
    const text = this.state.text;
    const currentUser = this.props.currentUser.displayName;

    AxiosAPI({
      method: "POST",
      url: "http://localhost:8000/send",
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
      if (response.data.msg === "success") {
        swal("Order Has Been Sent!");
      } else if (response.data.msg === "fail") {
        swal("Order failed to send");
      }
    });
  };

  render() {
    document.title = "5-Day Meal Plan Options | Veganease ";
    const { breakfast } = this.state;
    const { lunch } = this.state;
    const { snacks } = this.state;
    const { days } = this.state;
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

    let daysList =
      days.length > 0 &&
      days.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.weekDay}
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
          <h2>5-Day Meal Plan Form</h2>
          <h3>Choose Weekday</h3>
          <select onChange={this.onChangeWeekday}>{daysList}</select>
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
          <button type="submit" className="btn">
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

export default connect(mapStateToProps)(MealPlanForm5);

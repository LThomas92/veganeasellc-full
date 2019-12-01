import React from "react";
import axios from "axios";
import { selectCurrentUser } from "../User/User-Selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import swal from "sweetalert";

class MealPlanForm7 extends React.Component {
  state = {
    breakfast: [],
    lunch: [],
    snacks: [],
    days: [],
    text: "",
    weekdayOption: "",
    breakfastOption: "",
    lunchOption: "",
    snackOption: ""
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
      days: [
        { weekDay: "Monday" },
        { weekDay: "Tuesday" },
        { weekDay: "Wedensday" },
        { weekDay: "Thursday" },
        { weekDay: "Friday" },
        { weekDay: "Saturday" },
        { weekDay: "Sunday" }
      ]
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

  onSubmit = e => {
    e.preventDefault();
    const weekdayOption = this.state.weekdayOption;
    const breakfastOption = this.state.breakfastOption;
    const lunchOption = this.state.lunchOption;
    const snackOption = this.state.snackOption;
    const text = this.state.text;
    const currentUser = this.props.currentUser.displayName;

    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: {
        weekdayOption: weekdayOption,
        breakfastOption: breakfastOption,
        lunchOption: lunchOption,
        snackOption: snackOption,
        text: text,
        currentUser: currentUser
      }
    }).then(response => {
      if (response.data.msg === "success") {
        swal("Order Has Been Sent");
      } else if (response.data.msg === "fail") {
        swal("Message failed to send");
      }
    });
  };

  render() {
    document.title = "7-Day Meal Plan Options | Veganease ";
    const { breakfast } = this.state;
    const { lunch } = this.state;
    const { snacks } = this.state;
    const { days } = this.state;

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

    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} id="mealplan-form">
          <h2>7-Day Meal Plan Form</h2>
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
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <p>*Enter Each Order By Day Then Press Submit</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(MealPlanForm7);

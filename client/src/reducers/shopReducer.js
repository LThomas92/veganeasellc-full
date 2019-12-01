import mealPlanData from "../actions/mealPlanData";

const INITIAL_STATE = {
  collections: mealPlanData
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

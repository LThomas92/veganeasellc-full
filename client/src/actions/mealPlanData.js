const mealPlanData = [
  {
    id: 1,
    title: "Meal Plans",

    items: [
      {
        id: 1,
        title: "5-Day Meal Plan",
        image: require("../img/5-DayMealPlan.jpg"),
        desc:
          "Delivery service consisting of 10 delicious vegan meals & 5 snacks (About $6 per meal)",
        options: {
          breakfast: [
            "FRUIT BOWL",
            "FLAXMEAL PORRIDGE",
            "CORNMEAL PORRIDGE",
            "POST WORKOUT QUINOA BOWL",
            "BANANA OATMEAL CUPS (2)"
          ],
          lunch: [
            "PROTEIN POWERHOUSE",
            "SESAME EGGPLANT STIR-FRY 'N' ZOODLES",
            "COCONUT CURRY CHICKPEAS",
            "STUFFED PEPPERS",
            "ALT WRAP",
            "SPAGHETTI 'NO' MEATBALLS",
            "ROASTED GARLIC ASPARAGUS",
            "LENTIL SOUP",
            "PASTA SALAD"
          ],
          snacks: [
            "AGAVE CHILI POPCORN, CINNAMON SWEET POTATO CHIPS, BERRIES, PB&C"
          ]
        },
        price: 89.0
      },
      {
        id: 2,
        title: "7-Day Meal Plan",
        image: require("../img/7-DayMealPlan.jpg"),
        desc:
          "Freshly prepared meals to enjoy for the entire week! No 'cheat weekends' necessary. Consists of 14 deliciously nutritious meals and 7 snacks. (About $5 per meal) ",
        price: 125.0
      },
      {
        id: 3,
        title: "30-Day Meal Plan",
        image: require("../img/30-DayMealPlan.jpg"),
        desc:
          "BEST OFFER!! 30 days of flavorful on-the-go meals, totaling 60 meals and 30 snacks. (About $4 per meal!)",
        price: 430.0
      }
    ]
  }
];

export default mealPlanData;

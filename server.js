require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 8000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const creds = require("./config");
var api_key = creds.api_key;
var domain = creds.domain;
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.post("/send", (req, res, next) => {
  var weekday = req.body.weekdayOption;
  var breakfast = req.body.breakfastOption;
  var lunch = req.body.lunchOption;
  var snack = req.body.snackOption;
  var text = req.body.text;
  var user = req.body.currentUser;
  var delivery = req.body.deliveryOption;

  var content = `Hi Vanessa,\n
  ${user} has submitted a new meal plan order. Please see details of the order below:
    
  Weekday or Date: ${weekday} \n Breakfast Option: ${breakfast} \n Lunch Option: ${lunch} \n Snack Option: ${snack} \n Extra Details: ${text} 
  Delivery Method: ${delivery} \n *If Method is Delivery Use Shipping Address from Stripe Order*`;

  var data = {
    from: "Veganease LLC Orders <veganeasellc@gmail.com>",
    to: "veganeasellc@gmail.com",
    subject: `Veganease | Meal Plan Order - ${weekday} `,
    text: content
  };

  mailgun.messages().send(data, function(error, body) {
    console.log(body);
  });
});

//STRIPE PAYMENTS
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

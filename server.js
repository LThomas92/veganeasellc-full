require("dotenv/config");
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

const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  // add other server routes to path array
  app.use(proxy(["/"], { target: "http://localhost:8000" }));
};

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client', 'build", "index.html"));
  });
}

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

  var msg = {
    to: "lawrencegthomas@gmail.com", //Change to email address that you want to receive messages on
    from: "lawrencegthomas@gmail.com",
    subject: `Veganease | Meal Plan Order - ${weekday}`,
    text: content
  };

  sgMail.send(msg);
});

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

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

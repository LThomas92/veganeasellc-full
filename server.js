require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const alert = require("alert-node");
const uuid = require("uuid/v4");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 8000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

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

app.post("/api/send", (req, res, next) => {
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
    to: "veganeasellc@gmail.com", //Change to email address that you want to receive messages on
    from: "veganeasemail@gmail.com",
    subject: `Veganease | Meal Plan Order - ${weekday}`,
    text: content
  };

  sgMail.send(msg);
  alert("Your Order Has Been Submitted");
});

app.post("/api/payment", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { price, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

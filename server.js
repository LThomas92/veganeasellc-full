const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

var nodemailer = require("nodemailer");
const creds = require("./config");

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

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

  var content = `Hi Vanessa,\n
${user} has submitted a new meal plan order. Please see details of the order below:
  
Weekday or Date: ${weekday} \n Breakfast Option: ${breakfast} \n Lunch Option: ${lunch} \n Snack Option: ${snack} \n Extra Details: ${text} `;

  var mail = {
    to: "mofamillennial@gmail.com", //Change to email address that you want to receive messages on
    subject: `Veganease | Meal Plan Order - ${weekday} `,
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
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
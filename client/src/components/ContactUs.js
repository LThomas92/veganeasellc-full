import React from "react";

const ContactUs = () => {
  document.title = "Contact Us | Veganease";
  return (
    <React.Fragment>
      <div className="contactus-info">
        <h4 className="contactus-info__title">Hours of Operation</h4>
        <ul className="contactus-info__hours">
          <li>Mon 08:00 am – 03:00 pm</li>
          <li>Tue 08:00 am – 03:00 pm</li>
          <li>Wed 08:00 am – 03:00 pm</li>
          <li>Thur Closed</li>
          <li>Fri Closed</li>
          <li>Sat Closed</li>
          <li>* Sun Closed</li>
          <p>* Sunday is reserved for delivery only </p>
          <p>Contact Vanessa W. (516) 939-7239</p>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;

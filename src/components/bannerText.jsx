import React, { Component } from "react";
import Form from "./form";

class BannerText extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-6 banner-image-section">
        <div className="register-now-beta beta-phase">
          <p className="discount_broking">
            We just finished shortlisting our Beta Testers. But, you can still
            register and get 3 months of brokerage free trading.
          </p>
          <p className="alpha_users">
            Leave your details below and we’ll have someone from our team get in
            touch with you.
          </p>
        </div>
        <Form />
      </div>
    );
  }
}

export default BannerText;

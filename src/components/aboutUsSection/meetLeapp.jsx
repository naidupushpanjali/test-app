import React, { Component } from "react";
import LeappCards from "./leappCards";

class MeetLeappMakers extends Component {
  state = {};
  render() {
    return (
      <div className="container" id="meet-makers">
        <div className="row">
          <div className="col-sm-12">
            <div className="meetLeapp">
              <h4>Meet the Leapp Makers</h4>
              <p className="maker-desc">
                While some say we are the brains behind Project Leapp, we humbly
                disagree. Project Leapp is as much ours, as it is yours. Over
                the next 1 month we’ll be collaborating with you to perfect our
                discount broking platform. Come, be a Leapp Maker.
              </p>
            </div>
          </div>
        </div>
        <LeappCards />
      </div>
    );
  }
}

export default MeetLeappMakers;

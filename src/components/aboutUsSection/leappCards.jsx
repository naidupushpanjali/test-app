import React, { Component } from "react";
import LeappMaker1 from "./LeappMakers/leappMaker1";
import LeappMaker2 from "./LeappMakers/leappMaker2";
import LeappMaker3 from "./LeappMakers/leappMaker3";

class LeappCards extends Component {

  render() {
    return (
      <div className="row leapp-makers-reviews beta-phase-leapp-makers">
        <div className="col-sm-12 leapp-markers">
          <LeappMaker1 />
          <LeappMaker2 />
          <LeappMaker3 />
        </div>
      </div>
    );
  }
}

export default LeappCards;

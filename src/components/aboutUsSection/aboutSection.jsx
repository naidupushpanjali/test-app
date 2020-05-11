import React, { Component } from "react";

class AboutSection extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid beta-about-section" id="about-project">
        <div className="row">
          <div className="col-sm-12">
            <div className="beta-abt-project-leapp">
              <h4>About Project Leapp</h4>
              <p className="maker-desc">
                As you read this, our top 100 traders and investors have started
                testing and perfecting Project Leapp,<br />
                Sharekhan’s discount broking platform, loved by traders and
                investors, alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;

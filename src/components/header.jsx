import React, { Component } from "react";
import "../css/index.css";

class Header extends Component {
  state = {};
  render() {
    const headerImage = "assets/images/path-1436.svg";
    const logo = "assets/images/logo.svg";

    return (
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <img
              src={headerImage}
              className="header-border"
              alt="Header-line"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-6">
                <div className="logo-image">
                  <img src={logo} className="Logo" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

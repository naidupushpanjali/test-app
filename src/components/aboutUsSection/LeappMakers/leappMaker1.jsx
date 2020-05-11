import React, { Component } from "react";
// import { Styles } from "../styles/form";

class LeappMaker1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: false
    };
    this.readMore = this.readMore.bind(this);
  }

  readMore = e => {
    this.setState({ flip: !this.state.flip });
  };

  render() {
    const maker_1 = "./assets/images/images-1@3x.png";
    // const classes = Styles();
    return (
      <div
        className={
          "col-sm-4 reviews-block review1 " + (this.state.flip ? "flip" : "")
        }
      >
        <div className="front">
          <div className="uptime-image">
            <img src={maker_1} className="makers-image" alt="Meet makers 1" />
          </div>
          <h5>Rizwan Khan</h5>
          <h3 className="maker-heading">Technology Innovation Head</h3>
          <p className="maker-desc">
            "Before becoming project Leapp’s Technology Innovation Head, I have
            been a part of the Sharekhan tribe since the last 18 years. I’ve
            spent most of my time here taking up interesting challenges and
            perfecting the existing tech."
          </p>
          <button
            className="btn btn-default read_more "
            id="review-btn1"
            type="submit"
            onClick={this.readMore}
          >
            Read More<i className="fa fa-angle-right arrow-right" />
          </button>
        </div>
        <div className="back">
          <p className="readMore">
            "Apart from being a tech freak, I’m also a bigtime music lover. I am
            extremely passionate about creating new and improved customer
            experiences. My next challenge is to better our new trading platform
            while working with the traders out there."
          </p>
          <div className="goback">
            <button
              className="btn btn-default read_more"
              id="review-btn1"
              type="submit"
              onClick={this.readMore}
            >
              <i className="fa fa-angle-left arrow-left" />Read Less
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LeappMaker1;

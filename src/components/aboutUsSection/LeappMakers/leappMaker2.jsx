import React, { Component } from "react";

class LeappMaker2 extends Component {
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
    const maker_2 = "./assets/images/pexels-photo-220453@3x.png";
    return (
      <div
        className={
          "col-sm-4 reviews-block review2 " + (this.state.flip ? "flip" : "")
        }
        id="review2"
      >
        <div className="front">
          <div className="customer-image">
            <img src={maker_2} className="makers-image" alt="Meet makers 2" />
          </div>
          <h5>R. Kalyanaraman</h5>
          <h3 className="maker-heading">Chief Customer Officer</h3>
          <p className="maker-desc">
            "I am a sales guy at heart with utmost willingness to listen to
            people – customers, employees, competitors et al. Nothing gets me a
            bigger adrenaline rush than an interesting conversation with my
            customer!"
          </p>
          <button
            className="btn btn-default read_more"
            id="review-btn2"
            type="submit"
            onClick={this.readMore}
          >
            Read More<i className="fa fa-angle-right arrow-right" />
          </button>
        </div>
        <div className="back">
          <p className="readMore">
            "In all of 27 years of my experience, I am lucky to be a part of the
            start up journey for the second time in my life. My love for stocks
            stems from being an investor for the last 20 years now! A trained
            carnatic classical vocalist, I am also an avid cricket and tennis
            follower. I love to swim and practice yoga. The two help me to be
            flexible and open to constructive feedback."
          </p>
          <div className="goback">
            <button
              className="btn btn-default read_more"
              id="review-btn2"
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

export default LeappMaker2;

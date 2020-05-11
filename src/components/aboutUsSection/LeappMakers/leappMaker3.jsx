import React, { Component } from "react";

class LeappMakers3 extends Component {
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
    const maker_3 = "./assets/images/images@3x.png";
    return (
      <div
        className={
          "col-sm-4 reviews-block review3 " + (this.state.flip ? "flip" : "")
        }
        id="review3"
      >
        <div className="front">
          <div className="product-officer-image">
            <img src={maker_3} className="makers-image" alt="Meet makers 3" />
          </div>
          <h5>Chandresh Khona</h5>
          <h3 className="maker-heading">Product Offerings Head</h3>
          <p className="maker-desc">
            "A teacher, writer, travel buff and now Project Leapp&#39;s Product
            Offerings Head. Ten years here has allowed me to lead the digital
            team at Sharekhan. My true passion lies in the stock market charts."
          </p>
          <button
            className="btn btn-default read_more"
            id="review-btn3"
            type="submit"
            onClick={this.readMore}
          >
            Read More<i className="fa fa-angle-right arrow-right" />
          </button>
        </div>
        <div className="back">
          <p className="readMore">
            "Apart from that, I also have a deep interest in History and
            culture. I’m here to help you build with us an advanced trading
            platform that will not only be a new experience, but also make
            trading seem like a walk in the park."
          </p>
          <div className="goback">
            <button
              className="btn btn-default read_more"
              id="review-btn3"
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

export default LeappMakers3;

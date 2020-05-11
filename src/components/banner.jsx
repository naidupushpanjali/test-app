import React, { Component } from "react";
import BannerText from "./bannerText";
import AboutSection from "./aboutUsSection/aboutSection";
import MeetLeappMakers from "./aboutUsSection/meetLeapp";
import ProjectLeappNews from "./ProejctLeappNews/projectLeappNews";

class Banner extends Component {
  state = {};
  render() {
    const illustration_mobile = "assets/images/illustrations_mobile_1.png";
    const illustration_desktop = "assets/images/Illustration-1 (1).svg";
    const cloud = "assets/images/cloud1.svg";
    return (
      <React.Fragment>
        <section id="banner" data-aos="fade-up" data-aos-delay="400">
          <div className="container">
            <div className="row mobile illustration">
              <div className="col-sm-12">
                <img
                  src={illustration_mobile}
                  alt="Mobile_illustration"
                  className="mobile_illustration_1"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 display-flex">
                <img src={cloud} alt="Cloud-1" className="cloud-1" />
                <BannerText />
                <div className="col-sm-6 banner_img_section">
                  <div className="banner-image">
                    <img
                      src={illustration_desktop}
                      className="Illustrations"
                      alt="Illustration-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#about-project" id="scroll_down" className="arrow-down">
            <i className="fa fa-angle-down fas-angle" aria-hidden="false" />
          </a>
        </section>
        <section id="aboutProject">
          <AboutSection />
          <MeetLeappMakers />
        </section>
        <section>
          <ProjectLeappNews />
        </section>
      </React.Fragment>
    );
  }
}

export default Banner;

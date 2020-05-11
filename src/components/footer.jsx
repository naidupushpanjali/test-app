import React, { Component } from "react";
import Privacy from "./footer_links/privacy";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 footer-col">
              <div className="col-sm-5 footer_section footer_links footer_links1">
                <ul className="list-group footer-left">
                  <Privacy />
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="https://www.sharekhan.com/mediagalary/downloads/SharekhanPolicies.pdf"
                      target="blank"
                      className="footer_list"
                      id="footer_2"
                    >
                      Policies and Procedures
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="https://www.sharekhan.com/pdfs/Final_Terms&Conditions(T&C).pdf"
                      target="blank"
                      className="footer_list"
                      id="footer_3"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="https://www.sharekhan.com/mediagalary/downloads/Anti_Money_Laundering_Policy.pdf"
                      target="blank"
                      className="footer_list"
                      id="footer_4"
                    >
                      Anti Money Laundering Policy
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="!#"
                      className="footer_list"
                      id="footer_5"
                      data-toggle="modal"
                      data-target="#security"
                    >
                      Security
                    </a>
                  </li>
                  <br />
                </ul>
              </div>
              <div className="col-sm-3 footer_section footer_links2">
                <ul className="list-group footer-left">
                  <li className="list-inline-item">
                    <a
                      href="!#"
                      className="footer_list"
                      id="footer_6"
                      data-toggle="modal"
                      data-target="#research"
                    >
                      Research-Disclaimer
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="!#"
                      className="footer_list"
                      id="footer_7"
                      data-toggle="modal"
                      data-target="#copyright"
                    >
                      Copyright &nbsp; &nbsp;
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="!#"
                      className="footer_list"
                      id="footer_8"
                      data-toggle="modal"
                      data-target="#implinks"
                    >
                      Important Links
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="!#"
                      className="footer_list"
                      id="footer_9"
                      data-toggle="modal"
                      data-target="#disclaimer"
                    >
                      Disclaimer
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="https://www.sharekhan.com/associate-with-us/careers/life-at-sharekhan"
                      target="blank"
                      className="footer_list"
                      id="footer_10"
                    >
                      Careers
                    </a>
                  </li>
                  <br />
                </ul>
              </div>
              <div className="col-sm-5 footer_section footer_links3">
                <ul className="list-group footer-left">
                  <li className="list-inline-item">
                    <a
                      href="!#"
                      className="footer_list"
                      id="footer_11"
                      data-toggle="modal"
                      data-target="#kyc"
                    >
                      KYC document in vernacular languages
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="https://www.sharekhan.com/mediagalary/downloads/StaySecure_Mar2017_Password.jpg"
                      target="blank"
                      className="footer_list"
                      id="footer_12"
                    >
                      Stay Secure
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="https://www.sharekhan.com/common/stayalert/index.html"
                      target="blank"
                      className="footer_list"
                      id="footer_13"
                    >
                      Stay Alert
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="!#"
                      className="footer_list"
                      id="footer_14"
                      data-toggle="modal"
                      data-target="#ndncrterms"
                    >
                      NDNCR Terms & Conditions
                    </a>
                  </li>
                  <br />
                  <li className="list-inline-item">
                    <a
                      href="!#"
                      className="footer_list"
                      id="footer_15"
                      data-toggle="modal"
                      data-target="#scoresComplaint"
                    >
                      Filing complaints on SCORES - Easy & quick
                    </a>
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
          <div className="row footer_disclaimer">
            <p>
              <span>Disclaimer : </span>Investment in securities market are
              subject to market risks, read all the related documents carefully
              before investing. Please refer the Risk Disclosure Document issued
              by SEBI and go through the Rights and Obligations and Do's and
              Dont's issued by Stock Exchanges and Depositories before trading
              on the Stock Exchanges. For commodities derivatives please note
              that Commodities Derivatives are highly leveraged instruments. PMS
              is not offered in Commodity Derivative Segment by Sharekhan
              Limited. Before investing in the asset class consider your
              investment objectives, level of experience and risk appetite
              carefully.
            </p>
            <p className="rest_disclaimer_footer">
              There is no restriction on withdrawal of unutilized margin amount
            </p>
            <p>
              Registered Office: Sharekhan Limited, 10th Floor, Beta Building,
              Lodha iThink Techno Campus, Off. JVLR, Opp. Kanjurmarg Railway
              Station, Kanjurmarg (East), Mumbai - 400042, Maharashtra. Tel:{" "}
              <a href="tel: 022–61150000">022–61150000</a>. Sharekhan Ltd.: SEBI
              Regn. Nos.: BSE / NSE / MSEI (CASH / F&O / CD) / MCX – Commodity:
              INZ000171337; DP: NSDL/CDSL-IN-DP-365-2018; PMS: INP000005786;
              Mutual Fund: ARN 20669; Research Analyst: INH000006183; MCX Member
              id – 56125 For any complaints email at{" "}
              <a href="mailto: igc@sharekhan.com">igc@sharekhan.com</a>
              Compliance Officer: Mr. Joby John Meledan; email id:{" "}
              <a href="mailto: compliance@sharekhan.com">
                compliance@sharekhan.com
              </a>; Tel: <a href="tel: 022–61150000">022-61150000</a>.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12 footer_section">
              <ul className="list-unstyled list-inline text-center footer-right">
                <li className="list-inline-item copy-right">
                  &#9400; 2019 Sharekhan. All rights reserved.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

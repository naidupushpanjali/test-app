import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer_link: {
    color: "white",
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.54,
    textAlign: "left",
    letterSpacing: 0.07,
    textTransform: "lowercase",
    outline: "none"
  },
  footer_linkFocused: {
    outline: "none"
  }
});

export default function Privacy() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [maxWidth] = React.useState("md");
  const classes = useStyles();

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(
    () => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    },
    [open]
  );

  return (
    <div>
      <Button
        onClick={handleClickOpen("paper")}
        className={classes.footer_link}
        classes={{ focused: classes.inputFocused }}
      >
        Privacy
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={maxWidth}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <div className="logo-image logo-footer">
            <img
              src="assets/images/logo.svg"
              className="Logo"
              alt="Privacy_header"
            />
            <h5 className="modal_header">Privacy Policy</h5>
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          />
          <div className="footer_content">
            <span className="intro_header">Introduction</span>
            <p>
              Sharekhan Limited (TM) operates the web site accessible from the
              URL www.Sharekhan.com (the 'Web Site').
            </p>
            <p>
              Sharekhan Limited is committed to protecting your privacy and
              utilising technology that gives you the most powerful, safe,
              online experience that you can get anywhere else.
            </p>
            <p>
              Sharekhan Limited does, however, gather certain information that
              is provided by you to the Web Site. Sharekhan Limited believes
              that by collecting this information Sharekhan Limited is able to
              provide you with a personalised web experience, and to assist its
              own sales team and advertisers in efficiently reaching an
              appropriate audience.
            </p>
            <p>
              Sharekhan Ltd requests the minimum information it believes
              necessary to achieve this goal.
            </p>
            <p>
              The following discloses Sharekhan Ltd's information gathering and
              dissemination practices for the Web Site:
            </p>

            <span className="intro_header">System Data :</span>
            <p>
              Sharekhan Ltd uses your IP address to help diagnose problems with
              our server and to administer the web site. Your IP address is used
              to identify you and your shopping cart and to gather broad
              demographic information.
            </p>

            <span className="intro_header">Registration Data :</span>
            <p>
              The Web Site's registration form may require users to give us
              contact information (like their name and e-mail address), unique
              identifiers (like their PAN Number) and demographic information
              (like their pin code, age or income level). The Web Site uses
              customer contact information from the registration form to send
              the users information about Sharekhan Ltd and promotional material
              from some of Sharekhan Ltd's partners. The customer's contact
              information is also used to contact the visitor when necessary.
              Unique identifiers (such as PAN numbers) are collected to verify
              the user's identity. Demographic and profile data is also
              collected at the Web Site. We use this data to tailor the
              visitor's experience at the Web Site, showing them contents that
              we think they might be interested in, and displaying the contents
              according to their preferences. This information is shared with
              advertisers on an aggregate basis.
            </p>

            <span className="intro_header">Links and Co-Branded Sites :</span>
            <p>
              This site contains links to other Web Sites which are not
              necessarily been screened or reviewed by Sharekhan.com. Sharekhan
              Ltd is neither responsible for the privacy practices or the
              contents of such Web Sites nor shall be held answerable for the
              inaccurate, inappropriate or offensive data, material,
              information, products and services that may be viewed on those
              sites.
            </p>
            <p>
              Sharekhan Ltd operate a number of cobranded sites. Policies
              regarding information collection and sharing may differ on some of
              these co-branded sites. If you have any particular questions, you
              should check the privacy statement that appears on each co-branded
              site.
            </p>

            <span className="intro_header">Order Forms :</span>
            <p>
              The Web Site uses an order form for customers to request
              information, products and services. The Web Site collects
              visitors' contact information (like their e-mail address), unique
              identifiers (like their PAN number) financial information (like
              their account or credit card numbers) and demographic information
              (like their pin code, age or income level). Contact information
              from the order form is used to send orders, information about
              Sharekhan Ltd, and promotional material from some of Sharekhan
              Ltd's partners to the visitors of the Web Site. The visitor's
              contact information is also used to get in touch with the visitor
              when necessary. Financial information that is collected is used to
              check the users' qualifications and bill the user for products and
              services. Unique identifiers (such as PAN numbers) are collected
              from Web Site visitors to verify the user's identity.
            </p>

            <span className="intro_header">Surveys and Contests :</span>
            <p>
              The Web Site's online surveys ask visitors for contact information
              (like their e-mail address) and demographic information (like
              their pin code, age or income level). The Web Site uses contact
              data from its surveys to send the user information about Sharekhan
              Ltd and promotional material from some of Sharekhan. Ltd's
              partners. The customer's contact information is also used to
              contact the visitor when necessary. Users may opt-out of receiving
              future mailings; see the choice/opt-out section below. Demographic
              and profile data is also collected at the Web Site. The Web Site
              use this data to tailor its visitor's experience at the Web Site,
              showing them content that it thinks they might be interested in,
              and displaying the content according to their preferences. This
              information is shared with advertisers on an aggregate basis.
            </p>
            <p>
              Sharekhan. Ltd run contests on the Web Site in which we ask
              visitors for contact information (like their e-mail address).
              Sharekhan Ltd uses contact data from its contests to send users,
              information about Sharekhan. Ltd and promotional material from
              some of our partners. The customer's contact information is also
              used to contact the visitor when necessary. Users may opt-out of
              receiving future mailings; see the choice/opt-out section below.
            </p>

            <span className="intro_header">
              Third-Party Advertisement Servers :
            </span>
            <p>
              Sharekhan Ltd engages the services of an outside advertisement
              company to display advertisement on the Web Site. These
              advertisements may contain cookies. While Sharekhan Ltd uses
              cookies in other parts of the Web Site, cookies received with
              banner advertisements are collected by the Advertisement company,
              and Sharekhan Ltd does not have access to this information.
            </p>

            <span className="intro_header">
              Protection of your Data and Information :
            </span>
            <p>
              The privacy and protection of your data and information provided
              to us is of vital importance. Sharekhan Limited shall ensure to
              safeguard the security and confidentiality of any information you
              share with us. Any personally identifiable information of the
              customers obtained by us shall not be used or shared other than
              for the purposes to which the customers consents. However security
              and confidentiality of information cannot be guaranteed cent
              percent. Hence despite our utmost efforts to protect your personal
              information, Sharekhan Limited and Sharekhan.com cannot warrant
              the security of any information you transmit to us through our
              online services. Such transmission of your personal information is
              done at your own risk.
            </p>

            <span className="intro_header">
              Disclosure of Customer Information :
            </span>
            <p>
              Sharekhan Limited and Sharekhan.com shall not deliberately
              disclose customer's personally identifiable information to any
              unauthorized third person, save and except where such information
              shall be disclosed in good faith and for the purpose of law for
              the time being in force or to protect the rights and property of
              Sharekhan Limited and Sharekhan.com.
            </p>

            <span className="intro_header">Public Forums :</span>
            <p>
              The Web Sites makes chat rooms, forums, message boards and/or news
              groups available to its users. Please remember that any
              information that is disclosed in these areas becomes public
              information and you should exercise caution when deciding to
              disclose your personal information.
            </p>

            <span className="intro_header">Supplemental Information :</span>
            <p>
              The Web Site supplements the information that you provide with
              information that is received from third parties.
            </p>

            <span className="intro_header">Children's Guidelines :</span>
            <span>The Web Site:</span>
            <ul className="footer_policy_list">
              <li>
                DOES NOT collect online information from children without prior
                parental/guardian consent or parental/guardian notification,
                which will include an opportunity for the parent to prevent use
                of the information and participation in the activity. Without
                prior parental consent, online information will only be used to
                respond directly to the child's request and will not be used for
                other purposes without prior parental consent;
              </li>
              <li>
                DOES NOT collect personally identifiable offline contact
                information without prior parental consent;
              </li>
              <li>
                DOES NOT distribute to third parties any personally identifiable
                information without prior parental consent;
              </li>
              <li>
                DOES NOT give the ability to publicly post or otherwise
                distribute personally identifiable contact information without
                prior parental consent; and
              </li>
              <li>
                DOES NOT entice by the prospect of a special game, prize or
                other activity, to divulge more information than is needed to
                participate in the activity.
              </li>
            </ul>
            <p>
              Further to the above, in light of the recently notified
              Information Technology (Reasonable security practices and
              procedures and sensitive personal data or information) Rules,
              2011.(Hereinafter referred to as the Rules)
            </p>
            <p>Following amendments deem required under the Privacy Policy –</p>
            <p>The following shall be deemed to be sensitive information –</p>
            <p>
              Sensitive personal data or information of a person means such
              personal information which consists of information relating to;―
            </p>
            <ul className="footer_policy_list">
              <li className="lower_roman">password;</li>
              <li className="lower_roman">
                financial information such as Bank account or credit card or
                debit card or other payment instrument details ;
              </li>
              <li className="lower_roman">
                physical, physiological and mental health condition;
              </li>
              <li className="lower_roman">sexual orientation;</li>
              <li className="lower_roman">medical records and history;</li>
              <li className="lower_roman">Biometric information;</li>
              <li className="lower_roman">
                any detail relating to the above clauses as provided to body
                corporate for providing service;
              </li>
              <li className="lower_roman">
                any of the information received under above clauses by body
                corporate for processing, stored or processed under lawful
                contract or otherwise;
              </li>
            </ul>
            <p>
              provided that, any information that is freely available or
              accessible in public domain or furnished under the Right to
              Information Act, 2005 or any other law for the time being in force
              shall not be regarded as sensitive personal data or information
              for the purposes of Rules.
            </p>

            <span className="intro_header">Collection of Information :</span>
            <p>
              Any personal information collected from the client would be
              collected in order to satisfy the following conditions –
            </p>
            <ul>
              <li>
                Compliance with KYC guidelines as per SEBI / Exchanges / Or any
                other Act or regulation requiring the same and any internal KYC
                guidelines formulated by Sharekhan.
              </li>
              <li>
                In order to provide enhanced trading experience to the client.
              </li>
              <li>
                In order to provide any further information to be provided to
                regulators.
              </li>
            </ul>
            <p>
              Such information may be collected in a manner that the client is
              always aware of the collection and purported usage of the same.
              The client shall have an option to withdraw consent to share the
              information. However such intimation shall be required in writing.
              Such intimation shall only be taken into account from the date on
              which the same is received. Sharekhan may stop services in case
              such intimation is received in case the same is required under the
              regulations. Such information shall only be used for the purpose
              it is collected.
            </p>
            <p>
              Further once the information is not required the same would be
              deleted provided the same is in compliance with the Regulatory
              requirements. Clients would be allowed an option not to disclose
              any information to be collected, provided the same is in
              compliance with regulatory requirements.
            </p>
            <p>
              For any grievances the clients should send communication to
              igc@sharekhan.com. Sharekhan shall endeavor to resolve issues in a
              time bound manner. It shall be our endeavor to resolve such issues
              within 30 days from receipt.
            </p>

            <span className="intro_header">Disclosure of information :</span>
            <ul>
              <li>
                Disclosure of sensitive information would be as per the terms
                agreed by the clients. For any change in such terms, the clients
                would be informed.
              </li>
              <li>
                Provided no consent may be required in case the same is being
                shared as per compliance guidelines or as required by
                regulators.
              </li>
              <li>
                Any information being disclosed to third parties would be in
                accordance with the Rules and would be done provided such third
                party has the same level of compliance guidelines as Sharekhan.
              </li>
              <li>
                Sharekhan shall allow clients to review their personal
                information and the same shall be allowed to be edited provided
                exchange guidelines relevant to the same are followed.
              </li>
            </ul>
            <p>
              Sharekhan shall maintain, reasonable security practices and
              procedures and maintain a comprehensive documented information
              security programme. In the event of an information security
              breach, Sharekhan or a person on its behalf shall be required to
              demonstrate,as and when called upon to do so by the agency
              mandated under the law, that we have implemented security control
              measures as per their documented information security programme
              and information security policies and information security
              policies that contain managerial, technical, operational and
              physical security control measures that are commensurate with the
              information assets being protected with the nature of business
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

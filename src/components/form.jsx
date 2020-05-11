import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Styles } from "../styles/form";

export default function Form() {
  const classes = Styles();
  const [emailPattern, setEmailPattern] = useState(0);
  const [pincodeLength, setPincodeLength] = useState(1);
  const [mobilenoLength, setMobilenoLength] = useState(1);

  const onMobileTextChange = e => {
    setMobilenoLength(/\d{3}\d{3}\d{4}/.test(e.target.value));
    e.target.value = Math.max(0, parseInt(e.target.value))
      .toString()
      .slice(0, 10);
  };

  const onFullNameChange = e => {
    e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
  };

  const onPincodeChange = e => {
    setPincodeLength(/\d{6}/.test(e.target.value));
    e.target.value = Math.max(0, parseInt(e.target.value))
      .toString()
      .slice(0, 6);
  };

  const onEmailChange = e => {
    setEmailPattern(
      /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(e.target.value)
    );
    console.log(emailPattern);
  };

  const onSubmit = e => {
    debugger;
    console.log(setMobilenoLength);
    if (setMobilenoLength === false) {
      alert("hey you ");
    }
  };
  return (
    <form className={classes.root} autoComplete="off">
      <TextField
        label="Your Full Name please?"
        variant="outlined"
        className={classes.root}
        onInput={onFullNameChange}
      />
      <TextField
        label="What is your mobile no.?"
        variant="outlined"
        type="number"
        onChange={onMobileTextChange}
        className={classes.root}
        error={mobilenoLength === false}
        helperText={mobilenoLength === false ? "Invalid Mobile No" : ""}
      />
      <TextField
        label="Where do we reach you on E-mail ?"
        variant="outlined"
        onChange={onEmailChange}
        className={classes.root}
        error={emailPattern === false}
        helperText={emailPattern === false ? "Invalid Email Id" : ""}
      />
      <TextField
        label="Pincode"
        variant="outlined"
        className={classes.root}
        type="number"
        onChange={onPincodeChange}
        error={pincodeLength === false}
        helperText={pincodeLength === false ? "Invalid Pincode" : ""}
      />
      <div className="form-navigation beta-form-button">
        <div id="html_element" />
        <button
          value="Submit"
          className={classes.submitBtn}
          tabIndex="0"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

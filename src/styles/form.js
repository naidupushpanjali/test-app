import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      width: "36ch",
      marginTop: 10,
      marginRight: 15,
      fontSize: 11,
      fontFamily: "Poppins-Regular",
      color: "#707070",
      textAlign: "left"
    }
  },
  submitBtn: {
    backgroundColor: "#DFC822",
    width: 90,
    height: 35,
    color: "#1a1818",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    marginTop: 30,
    border: 0,
    borderRadius: 6,
    marginLeft: 5
  }
}));

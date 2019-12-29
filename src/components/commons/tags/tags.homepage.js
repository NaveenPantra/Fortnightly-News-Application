import { h } from "preact";
import { Link } from "preact-router/match";
import withStyles from "react-jss";

const styles = {
  root: {
    marginRight: "1rem",
    fontFamily: '"Libre Franklin", sans-serif',
    fontWeight: 400,
    padding: "0 1rem",
    borderRight: "var(--dotted-line)",
    // padding: "1rem 1.4rem",
    fontSize: "1.4rem",
    "&:first-child": {
      marginLeft: "1.2rem",
      paddingLeft: "0"
    },
    "&:last-child": {
      border: "none",
      paddingRight: "2rem"
    }
  }
};

const TagHomePage = ({ classes, tagData }) => {
  const { tagName } = tagData;
  return (
    <>
      <h4 class={classes.root}>
        <span>#</span>
        &nbsp;
        <span>{tagName}</span>
      </h4>
    </>
  );
};

export default withStyles(styles)(TagHomePage);

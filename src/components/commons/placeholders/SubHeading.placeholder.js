import withStyles from "react-jss";

const styles = {
  root: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    padding: "1rem",
    margin: "1rem 0",
    height: "6.2rem",

    "&::after, &::before": {
      content: '""',
      position: "absolute",
      display: "block",
      background: "var(--color-collapse-border)",
      borderRadius: 2,
      height: "28%",
      left: 0
    },
    "&::after": {
      top: "10%",
      left: "1rem",
      width: "90%",
      animation: "apperDisapper 1.9s linear 0s infinite backwards"
    },
    "&::before": {
      bottom: "17%",
      width: "60%",
      left: "1rem",
      animation: "apperDisapper 1.9s linear 0.5s infinite backwards"
    }
  }
};

const SubHeadingPlaceholder = ({ classes }) => {
  return (
    <>
      <div class={classes.root}></div>
    </>
  );
};

export default withStyles(styles)(SubHeadingPlaceholder);

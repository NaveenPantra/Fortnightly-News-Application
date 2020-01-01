import withStyles from "react-jss";

const styles = {
  root: {
    display: "block",
    position: "relative",
    height: "7.4rem",
    width: "100%",
    margin: "0 0 0",
    padding: "1rem",

    "&::after,&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: "1rem",
      height: "35%",
      borderRadius: 3,
      background: "var(--color-collapse-border)"
    },
    "&::after": {
      top: "15%",
      width: "90%",
      animation: "apperDisapper 1.9s linear 0s infinite backwards"
    },
    "&::before": {
      bottom: "6%",
      width: "40%",
      animation: "apperDisapper 1.9s linear 0.5s infinite backwards"
    }
  }
};

const HeadlinePlaceholder = ({ classes }) => {
  return (
    <>
      <div class={classes.root}></div>
    </>
  );
};

export default withStyles(styles)(HeadlinePlaceholder);

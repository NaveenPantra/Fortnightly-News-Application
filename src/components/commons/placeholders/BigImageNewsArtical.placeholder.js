import withStyles from "react-jss";

const styles = {
  root: {
    margin: "1rem 1.3rem",
    borderBottom: "var(--dotted-line-placehoolder)",
    paddingBottom: "2rem"
  },
  image: {
    display: "inline-block",
    width: "100%",
    height: "40vh",
    background: "var(--color-collapse-border)",
    animation: "apperDisapper 1.9s linear 0s infinite"
  },
  tagInfo: {
    position: "relative",
    width: "100%",
    padding: "0.7rem 0",
    height: "3rem",

    "&::after, &::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      height: "40%",
      width: "12rem",
      background: "var(--color-collapse-border)",
      animation: "apperDisapper 1.9s linear 0.2s infinite"
    },
    "&::after": {
      left: 0
    },
    "&::before": {
      right: 0,
      width: "3rem"
    }
  },
  newsInfo: {
    position: "relative",
    width: "100%",
    height: "6rem",
    "&::after, &::before": {
      content: '""',
      display: "block",
      position: "absolute",
      height: "27%",
      background: "var(--color-collapse-border)",
      animation: "apperDisapper 1.9s linear 0.6s infinite"
    },
    "&::after": {
      width: "80%",
      top: 0,
      transform: "translateY(50%)"
    },
    "&::before": {
      width: "40%",
      bottom: 0,
      transform: "translateY(-40%)"
    }
  }
};

const BigImageNewsArticalPlaceholder = ({ classes }) => {
  return (
    <>
      <div class={classes.root}>
        <span class={classes.image}></span>
        <div class={classes.tagInfo}></div>
        <div class={classes.newsInfo}></div>
      </div>
    </>
  );
};

export default withStyles(styles)(BigImageNewsArticalPlaceholder);

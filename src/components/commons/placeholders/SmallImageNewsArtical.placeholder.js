import withStyles from "react-jss";

const styles = {
  root: {
    margin: "1rem 1.3rem",
    display: "flex",
    padding: "1rem 0 2rem",
    overflow: "hidden",
    alignItems: "center",
    borderBottom: "var(--dotted-line-placehoolder)",
    justifyContent: "space-between"
  },
  info: {
    flex: 1,
    marginRight: "1rem"
  },
  tagInfo: {
    position: "relative",
    marginBottom: ".7rem",
    height: "1.6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    "&::after, &::before": {
      content: '""',
      position: "absolute",
      display: "block",
      borderRadius: 2,
      height: "50%",
      top: 0,
      background: "var(--color-collapse-border)",
      animation: "apperDisapper 1.9s linear 0s infinite"
    },
    "&::after": {
      width: "10rem",
      left: 0
    },
    "&::before": {
      width: "2rem",
      right: 0
    }
  },
  headline: {
    height: "4rem",
    width: "100%",
    position: "relative",
    "&::after, &::before": {
      content: '""',
      position: "absolute",
      display: "block",
      height: "36%",
      left: 0,
      background: "var(--color-collapse-border)",
      animation: "apperDisapper 1.9s linear 0.2s infinite",
      borderRadius: 2
    },
    "&::after": {
      width: "100%",
      top: 0
    },
    "&::before": {
      width: "40%",
      bottom: 0
    }
  },
  image: {
    width: "10rem",
    height: "7rem",
    borderRadius: 2,
    background: "var(--color-collapse-border)",
    animation: "apperDisapper 1.9s linear 0.6s infinite"
  }
};

const SmallImageNewsArticlePlaceholder = ({ classes }) => {
  return (
    <>
      <div class={classes.root}>
        <div class={classes.info}>
          <div class={classes.tagInfo}></div>
          <div class={classes.headline}></div>
        </div>
        <div class={classes.image}></div>
      </div>
    </>
  );
};

export default withStyles(styles)(SmallImageNewsArticlePlaceholder);

import withStyles from "react-jss";

const styles = {
  root: {
    display: "inline-block",
    position: "relative",
    background: "var(--color-collapse-border)",
    animation: "apperDisapper 1.9s linear 0s infinite",
    borderRadius: 3,
    width: "6rem",
    height: "1.5rem",
    marginRight: "2.5rem",
    fontSize: "1.4rem",

    "&:last-child": {
      paddingRight: "2.5rem"
    },

    "&:not(:last-child)::after": {
      content: '"¬"',
      position: "absolute",
      color: "var(--color-tag-separator)",
      display: "block",
      right: 0,
      transform: "translate(18px, -3px)"
    }
  }
};

const TagPlaceholder = ({ classes }) => {
  const dymmyArray = [1, 2, 3, 4];
  return (
    <>
      {dymmyArray.map(val => (
        <span key={val} class={classes.root}></span>
      ))}
    </>
  );
};

export default withStyles(styles)(TagPlaceholder);

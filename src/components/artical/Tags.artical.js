import { h } from "preact";
import { Link } from "preact-router/match";
import withStyles from "react-jss";

const styles = {
  root: {
    margin: "1rem 0",
    display: "flex",
    overflowX: "scroll",
    alignItems: "center",
    color: "var(--color-wet-asphalt)",
    // fontFamily: "'Open Sans', sans-serif",
    // fontFamily: "'Ubuntu', sans-serif"
    fontFamily: "'Dosis', sans-serif",
    "&::-webkit-scrollbar": {
      display: "none"
    },
    "&::after": {
      content: '""',
      display: "block",
      position: "fixed",
      width: "1.4rem",
      height: "3.7rem",
      background: "var(--linear-gradient-white)",
      right: 0
    }
  },
  tagName: {
    padding: "1rem",
    marginRight: "1.3rem",
    display: "flex",
    alignItems: "center",
    position: "relative",
    fontSize: "1.4rem",
    fontWeight: 700,

    "&:last-child": {
      paddingRight: "2.5rem"
    },

    "&:not(:last-child)::after": {
      content: '"¬"',
      position: "absolute",
      color: "var(--color-tag-separator)",
      display: "block",
      right: 0,
      transform: "translate(7px, -2px)"
    }
  }
};

const ArticleTags = ({ classes, tags = [] }) => {
  return (
    <>
      <section class={classes.root}>
        {tags.map(tag => (
          <span class={classes.tagName}>{tag.tagName}</span>
        ))}
      </section>
    </>
  );
};

export default withStyles(styles)(ArticleTags);

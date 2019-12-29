import { h } from "preact";
import { Link } from "preact-router/match";
import TagsHomePage from "./../commons/tags/tags.homepage";
import withStyles from "react-jss";
import { connect } from "react-redux";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    overflowX: "scroll",
    overflowY: "hidden",
    padding: "1rem 0",
    position: "relative",
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
  }
};

const TagWrapperHomePage = ({ classes, tagData }) => {
  const tagsHomePageUIList = getTagsHomePageUIList({ tagData });
  return (
    <>
      <section class={classes.root}>{tagsHomePageUIList}</section>
    </>
  );
};

const getTagsHomePageUIList = ({ tagData }) => {
  return Object.keys(tagData).map(tag => {
    return <TagsHomePage tagData={tagData[tag]} />;
  });
};

const mapStateToProps = ({ tagData }) => ({ tagData });

export default connect(mapStateToProps)(withStyles(styles)(TagWrapperHomePage));

import { connect } from "react-redux";
import withStyles from "react-jss";
import ArticleParaGraph from "./Paragraph.artical";

const styles = {};

const ArticalBody = ({ classes, body = [] }) => {
  return <>{body.map(content => getBodyContentsUI({ content }))}</>;
};

const getBodyContentsUI = ({ content }) => {
  switch (content.type) {
    case "text":
      return <ArticleParaGraph content={content.text} />;
    default:
      return null;
  }
};

export default withStyles(styles)(ArticalBody);

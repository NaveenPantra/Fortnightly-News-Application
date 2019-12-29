import withStyles from "react-jss";

const styles = {
  paragraph: {
    fontFamily: '"Merriweather", serif',
    fontWeight: 300,
    margin: "1rem 1rem 2rem",
    textAlign: "justify",
    fontSize: "1.5rem",
    lineHeight: 1.4,
    // initialLetter: "4 1",
    color: "#4a4a4a"
    // "-webkit-initial-letter": 4
    // "initial-letter": 4,
    // "&::first-letter": {
    //   //   fontSize: 40
    //   "-webkit-initial-letter": "4 1",
    //   "initial-letter": "4 1",
    //   color: "orange",
    //   "font-weight": "bold"
    // }
  },
  firstLetter: {
    fontWeight: 500,
    fontStyle: "italic",
    color: "var(--color-wet-asphalt)",
    float: "left",
    padding: "0 1rem 0 0",
    fontSize: "6.4rem",
    position: "relative",
    marginRight: "-4px",
    top: "-14px",
    marginBottom: "-44px"
  }
};

const ArticleParaGraph = ({ classes, content }) => {
  return (
    <>
      <p class={classes.paragraph}>
        {/* {content} */}
        <span class={classes.firstLetter}>{content.slice(0, 1)}</span>
        <span>{content.slice(1)}</span>
      </p>
    </>
  );
};

export default withStyles(styles)(ArticleParaGraph);

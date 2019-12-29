import { h, Component } from "preact";
import { Link } from "preact-router/match";
import withStyles from "react-jss";
import ArticleTags from "./Tags.artical";
import ArticleAuthor from "./Aurhor.artical";

const styles = {
  figure: {
    overflow: "hidden"
  },
  image: {
    width: "100%",
    minHeight: "30vh",
    maxHeight: "40vh",
    objectFit: "cover"
  },
  heading: {
    fontFamily: '"Merriweather", serif',
    fontWeight: 700,
    fontSize: "2.7rem",
    fontStyle: "italic",
    lineHeight: 1.4,
    margin: "1rem"
  },
  subHeading: {
    fontFamily: '"Merriweather", serif',
    // fontFamily: '"Libre Franklin", sans-serif',
    fontWeight: 300,
    fontSize: "1.5rem",
    textAlign: "justify",
    lineHeight: 1.4,
    margin: "1rem",
    color: "var(--color-brackcrumb-inactive)"
  }
};

const ArticalHeader = ({
  classes,
  newsPrimeImageURL = "",
  tags = [],
  views = "",
  headline = "",
  subText = "",
  author = {}
}) => {
  return (
    <>
      <figure class={classes.figure}>
        <img src={newsPrimeImageURL} alt={headline} class={classes.image} />
        <figcaption>
          <ArticleTags tags={tags} />
          <h1 class={classes.heading}>{headline}</h1>
          <h3 class={classes.subHeading}>{subText}</h3>
          <ArticleAuthor author={author} />
        </figcaption>
      </figure>
    </>
  );
};

export default withStyles(styles)(ArticalHeader);

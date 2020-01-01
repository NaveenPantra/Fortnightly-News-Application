import { h, Component } from "preact";
import { Link } from "preact-router/match";
import withStyles from "react-jss";
import ArticleTags from "./Tags.artical";
import ArticleAuthor from "./Aurhor.artical";
import SubHeadingPlaceholder from "./../commons/placeholders/SubHeading.placeholder";
import HeadingPlaceholder from "./../commons/placeholders/Heading.placeholder";

const styles = {
  figure: {
    overflow: "hidden"
  },
  image: {
    display: "block",
    width: "100%",
    minHeight: "30vh",
    maxHeight: "58vh",
    objectFit: "cover",
    background: "var(--color-collapse-border)"
  },
  imagePlaceholderStyle: {
    height: "40vh",
    animation: "apperDisapper 1.9s linear 0s infinite"
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
  author = {},
  isCompletlyFetched = false
}) => {
  return (
    <>
      <figure class={classes.figure}>
        <img
          src={newsPrimeImageURL}
          alt={headline}
          class={`${classes.image} ${
            !isCompletlyFetched && newsPrimeImageURL.length === 0
              ? classes.imagePlaceholderStyle
              : ""
          }`}
        />
        <figcaption>
          <ArticleTags tags={tags} isCompletlyFetched={isCompletlyFetched} />
          {!isCompletlyFetched && headline.length === 0 ? (
            <HeadingPlaceholder />
          ) : (
            <h1 class={classes.heading}>{headline}</h1>
          )}

          {!isCompletlyFetched && subText.length === 0 ? (
            <SubHeadingPlaceholder />
          ) : (
            <h3 class={classes.subHeading}>{subText}</h3>
          )}
          <ArticleAuthor
            author={author}
            isCompletlyFetched={isCompletlyFetched}
          />
        </figcaption>
      </figure>
    </>
  );
};

export default withStyles(styles)(ArticalHeader);

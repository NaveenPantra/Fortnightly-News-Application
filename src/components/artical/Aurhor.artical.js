import { Link } from "preact-router/match";
import withStyles from "react-jss";

const styles = {
  figure: {
    margin: "1rem",
    marginTop: "2rem",
    display: "flex",
    alignItems: "center"
  },
  figurePlaceholderStyle: {
    marginTop: 0
  },
  image: {
    width: "4.5rem",
    height: "4.5rem",
    objectFit: "cover",
    borderRadius: "50%",
    marginRight: "1rem",
    background: "var(--color-collapse-border)"
  },
  figcaption: {
    display: "flex",
    alignItems: "center",

    "& > span:nth-of-type(1)": {
      fontSize: "1.6rem",
      marginRight: "1rem",
      color: "var(--color-brackcrumb-inactive)"
    }
  },
  authorName: {
    fontFamily: '"Merriweather", serif',
    position: "relative",
    fontSize: "1.8rem",
    fontStyle: "italic",
    fontWeight: 700,
    display: "block",
    // transform: "translateY(3px)",
    // padding: 3,
    "&::after": {
      content: '""',
      zIndex: -1,
      position: "absolute",
      display: "block",
      bottom: 3,
      width: "100%",
      height: ".6rem",
      background: "var(--color-tag-separator)"
    }
  },
  authorNameHolder: {
    display: "block",
    width: "13rem",
    height: "1.6rem",
    background: "var(--color-collapse-border)",
    animation: "apperDisapper 1.9s linear 0.5s infinite"
  }
};

const ArticleAuthor = ({
  classes,
  author: { authorID = "", name = "", imageURL = "" } = {},
  isCompletlyFetched = false
}) => {
  const imageStyle = {
    animation: "apperDisapper 1.9s linear 0s infinite"
  };
  return (
    <>
      <figure
        class={`${classes.figure} ${
          !isCompletlyFetched ? classes.figurePlaceholderStyle : ""
        }`}
      >
        <img
          src={imageURL}
          alt={name}
          class={classes.image}
          style={!isCompletlyFetched ? imageStyle : null}
        />
        <figcaption class={classes.figcaption}>
          <span>by</span>
          {!isCompletlyFetched ? (
            <span class={classes.authorNameHolder}></span>
          ) : (
            <Link href={`/author/${authorID}`}>
              <span class={classes.authorName}>{name}</span>
            </Link>
          )}
        </figcaption>
      </figure>
    </>
  );
};

export default withStyles(styles)(ArticleAuthor);

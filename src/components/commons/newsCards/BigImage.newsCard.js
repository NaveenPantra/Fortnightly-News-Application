import { h } from "preact";
import { Link } from "preact-router/match";
import withStyles from "react-jss";

const styles = {
  figure: {
    margin: "1rem 1.3rem",
    paddingBottom: "2rem",
    borderBottom: "var(--dotted-line)"
  },
  image: {
    width: "100%",
    minHeight: "30vh",
    maxHeight: "45vh",
    objectFit: "cover"
  },
  figcaption: {},
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ".7rem 0",
    fontSize: "1.2rem",
    "& p:nth-of-type(1)": {
      fontWeight: 600
    },
    "& p:nth-of-type(2)": {
      fontWeight: 300
    }
  },
  heading: {
    fontWeight: 300,
    fontSize: "2.3rem",
    lineHeight: 1.3
  }
};

const BigImageNewsCard = ({ classes, newsData }) => {
  const { newsPrimeImageURL, headline, tags, views } = newsData;
  const tag = typeof tags === "object" ? tags[0].tagName : "";
  return (
    <>
      <Link href={`/article/${newsData.newsID}`}>
        <figure class={classes.figure}>
          <img src={newsPrimeImageURL} alt={headline} class={classes.image} />
          <figcaption class={classes.figcaption}>
            <div class={classes.header}>
              <p>{tag}</p>
              <p>{views}</p>
            </div>
            <h3 class={classes.heading}>{headline}</h3>
          </figcaption>
        </figure>
      </Link>
    </>
  );
};

export default withStyles(styles)(BigImageNewsCard);

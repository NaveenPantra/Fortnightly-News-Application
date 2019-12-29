import { h } from "preact";
import { Link } from "preact-router/match";
import withStyles from "react-jss";

const styles = {
  figure: {
    margin: "1rem 1.3rem",
    padding: "1rem 0 2rem",
    borderBottom: "var(--dotted-line)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",

    "& figcaption": {
      flex: 1,
      marginRight: "1rem"
    }
  },
  image: {
    order: 1,
    width: "10rem",
    height: "7rem",
    // maxHeight: "7rem"
    objectFit: "cover"
  },
  tagsInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: ".7rem",
    fontSize: "1.2rem",
    "& p:nth-of-type(1)": {
      fontWeight: 600
    },
    "& p:nth-of-type(2)": {
      fontWeight: 300
    }
  },
  heading: {
    fontWeight: 400,
    fontSize: "1.6rem"
  }
};

const SmallImageNewsCard = ({ classes, newsData }) => {
  const { newsPrimeImageURL, headline, tags, views } = newsData;
  const tag = typeof tags === "object" ? tags[0].tagName : "";
  return (
    <>
      <Link href={`/article/${newsData.newsID}`}>
        <figure class={classes.figure}>
          <img src={newsPrimeImageURL} alt={tags} class={classes.image} />
          <figcaption>
            <div class={classes.tagsInfo}>
              <p>{tag}</p>
              <p>{views}</p>
            </div>
            <h4 class={classes.heading}>{headline}</h4>
          </figcaption>
        </figure>
      </Link>
    </>
  );
};

export default withStyles(styles)(SmallImageNewsCard);

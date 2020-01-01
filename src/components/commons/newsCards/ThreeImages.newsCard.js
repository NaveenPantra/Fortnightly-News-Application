import { h } from "preact";
import { Link } from "preact-router/match";
import withStyles from "react-jss";

const styles = {
  figure: {
    margin: "1rem 1.3rem",
    padding: "1.3rem 0 2rem",
    borderBottom: "var(--dotted-line)",
    animation: "slowAppear .3s linear",
    animationFillMode: "backwards"
  },
  imageWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gridColumnGap: 4,
    gridRowGap: 4
  },
  image: {
    width: "100%",
    objectFit: "cover",
    "&:nth-of-type(1)": {
      gridRow: "1 / -1"
    },
    "&:nth-of-type(2)": {
      height: "100%"
    },
    "&:last-child": {
      height: "100%"
    }
  },
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

const ThreeImageNewsCard = ({ classes, newsData }) => {
  const { newsImages = [], headline, tags, views } = newsData;
  const tag = typeof tags === "object" ? tags[0].tagName : "";
  return (
    <>
      <Link href={`/article/${newsData.newsID}`}>
        <figure class={classes.figure}>
          <div class={classes.imageWrapper}>
            {newsImages.map(imageURL => (
              <img
                key={imageURL}
                src={imageURL}
                alt={imageURL}
                class={classes.image}
              />
            ))}
          </div>
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

export default withStyles(styles)(ThreeImageNewsCard);

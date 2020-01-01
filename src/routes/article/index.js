import { h, Component } from "preact";
import { Link } from "preact-router/match";
import { useEffect } from "preact/hooks";
import { connect } from "react-redux";
import { getNewsItemAsync } from "./../../redux/NewsData/newsData.actions";
import withStyles from "react-jss";
import ArticalHeader from "./../../components/artical/Header.artical";
import ArticalBody from "./../../components/artical/Body.artical";
import BodyArtical from "./../../components/artical/Body.artical";

const styles = {
  root: {
    animation: "slowAppear .3s linear",
    animationFillMode: "backwards"
  }
};

const Article = ({ classes, newsID, newsData = {}, getNewsItemAsync }) => {
  const {
    newsImages = [],
    headline = "",
    subText = "",
    tags = [],
    views = "",
    newsPrimeImageURL = "",
    author = {},
    body = [],
    isCompletlyFetched = false
  } = newsData;
  useEffect(() => {
    if (headline.length === 0 || !isCompletlyFetched)
      getNewsItemAsync({ newsID });
  });
  // if (headline.length === 0) return null;
  return (
    <>
      <article class={classes.root}>
        <ArticalHeader
          newsPrimeImageURL={newsPrimeImageURL}
          headline={headline}
          subText={subText}
          tags={tags}
          views={views}
          author={author}
          isCompletlyFetched={isCompletlyFetched}
        />
        <BodyArtical body={body} isCompletlyFetched={isCompletlyFetched} />
      </article>
    </>
  );
};

const mapStateToProps = ({ newsData: { newsItems = {} } }, { newsID }) => ({
  newsData: Object.assign({}, newsItems[newsID])
});

const mapDispatchToProps = dispatch => ({
  getNewsItemAsync: payload => dispatch(getNewsItemAsync(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Article));

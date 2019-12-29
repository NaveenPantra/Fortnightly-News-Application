import { h, Component } from "preact";
import { Link } from "preact-router/match";
import { connect } from "react-redux";
import withStyles from "react-jss";
import ArticalHeader from "./../../components/artical/Header.artical";
import ArticalBody from "./../../components/artical/Body.artical";
import BodyArtical from "./../../components/artical/Body.artical";

const styles = {};

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render({ classes, newsID, newsData = {} }, {}) {
    const {
      newsImages = [],
      headline = "",
      subText = "",
      tags = [],
      views = "",
      newsPrimeImageURL = "",
      author = {},
      body = []
    } = newsData;
    return (
      <>
        <article>
          <ArticalHeader
            newsPrimeImageURL={newsPrimeImageURL}
            headline={headline}
            subText={subText}
            tags={tags}
            views={views}
            author={author}
          />
          <BodyArtical body={body} />
        </article>
      </>
    );
  }
}

const mapStateToProps = ({ newsData }, { newsID }) => ({
  newsData: Object.assign({}, newsData[newsID])
});

export default connect(mapStateToProps)(withStyles(styles)(Article));

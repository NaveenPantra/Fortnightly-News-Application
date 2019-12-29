import { h } from "preact";
import { Link } from "preact-router/match";
import withStyles from "react-jss";
import { connect } from "react-redux";
import BigImageNewsCard from "./../commons/newsCards/BigImage.newsCard";
import SmallImageNewsCard from "./../commons/newsCards/smallImage.newsCard";
import TwoVerticalImages from "./../commons/newsCards/TwoVerticalImages.newsCard";
import ThreeImageNewsCard from "./../commons/newsCards/ThreeImages.newsCard";

const styles = {
  "@global a:last-child > figure": {
    borderBottom: "none"
  }
};

const NewsArticlesWrapper = ({ newsData }) => {
  const newsDataList = getNewsDataUIList({ newsData });
  return <>{newsDataList}</>;
};

const getNewsDataUIList = ({ newsData }) => {
  return Object.keys(newsData).map(newsID => {
    return getAritcalCard({ newsData: newsData[newsID] });
  });
};

const getAritcalCard = ({ newsData }) => {
  switch (newsData.displayType) {
    case 0:
      return <SmallImageNewsCard key={newsData.newsID} newsData={newsData} />;
    case 1:
      return <BigImageNewsCard key={newsData.newsID} newsData={newsData} />;
    case 2:
      return <TwoVerticalImages key={newsData.newsID} newsData={newsData} />;
    case 3:
      return <ThreeImageNewsCard key={newsData.newsID} newsData={newsData} />;
    default:
      return <SmallImageNewsCard key={newsData.newsID} newsData={newsData} />;
  }
};

const mapStateToProps = ({ newsData }) => ({ newsData });

export default connect(mapStateToProps)(
  withStyles(styles)(NewsArticlesWrapper)
);

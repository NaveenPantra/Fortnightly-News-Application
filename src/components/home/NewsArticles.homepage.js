import { h } from "preact";
import { Link } from "preact-router/match";
import { useEffect } from "preact/hooks";
import withStyles from "react-jss";
import { connect } from "react-redux";
import { getNewsItemsAsync } from "./../../redux/NewsData/newsData.actions";
import ArticlePlaceholderWrapper from "./ArticlePlaceHolderWrapper";
import BigImageNewsCard from "./../commons/newsCards/BigImage.newsCard";
import SmallImageNewsCard from "./../commons/newsCards/smallImage.newsCard";
import TwoVerticalImages from "./../commons/newsCards/TwoVerticalImages.newsCard";
import ThreeImageNewsCard from "./../commons/newsCards/ThreeImages.newsCard";

const styles = {
  "@global a:last-child > figure": {
    borderBottom: "none"
  }
};

const NewsArticlesWrapper = ({
  newsData,
  isLoadingNewsItems,
  isErrorLoadingNewsItems,
  errorMessage,
  getNewsItemsAsync
}) => {
  useEffect(() => {
    if (isLoadingNewsItems) getNewsItemsAsync();
  });
  if (isLoadingNewsItems) return <ArticlePlaceholderWrapper />;
  const newsDataList = getNewsDataUIList({ newsData });
  return <>{newsDataList}</>;
};

const getNewsDataUIList = ({ newsData }) => {
  return Object.keys(newsData).map((newsID, index) => {
    return getAritcalCard({ newsData: newsData[newsID], index });
  });
};

const getAritcalCard = ({ newsData, index }) => {
  switch (newsData.displayType) {
    case 0:
      return (
        <SmallImageNewsCard
          key={newsData.newsID}
          newsData={newsData}
          index={index}
        />
      );
    case 1:
      return (
        <BigImageNewsCard
          key={newsData.newsID}
          newsData={newsData}
          index={index}
        />
      );
    case 2:
      return (
        <TwoVerticalImages
          key={newsData.newsID}
          newsData={newsData}
          index={index}
        />
      );
    case 3:
      return (
        <ThreeImageNewsCard
          key={newsData.newsID}
          newsData={newsData}
          index={index}
        />
      );
    default:
      return (
        <SmallImageNewsCard
          key={newsData.newsID}
          newsData={newsData}
          index={index}
        />
      );
  }
};

const mapStateToProps = ({
  newsData: {
    isLoadingNewsItems = true,
    newsItems = {},
    isErrorLoadingNewsItems = false,
    errorMessage = ""
  }
}) => ({
  newsData: newsItems,
  isLoadingNewsItems,
  isErrorLoadingNewsItems,
  errorMessage
});

const mapDispatchToProps = dispatch => ({
  getNewsItemsAsync: () => dispatch(getNewsItemsAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NewsArticlesWrapper));

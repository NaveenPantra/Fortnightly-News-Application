import { h } from "preact";
import TagsWrapper from "./../../components/home/TagsWrapper.homepage";
import NewsArticlesHomePage from "./../../components/home/NewsArticles.homepage";

const Home = ({ newsData }) => {
  return (
    <>
      <TagsWrapper />
      <NewsArticlesHomePage />
    </>
  );
};

export default Home;

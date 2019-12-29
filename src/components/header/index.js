import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Link } from "preact-router/match";
import withStyles from "react-jss";
import MenuIcon from "./../../assets/icons/menu.svg";
import BookmarkIcon from "./../../assets/icons/bookmark.svg";

const styles = {
  header: {
    padding: "1.4rem 1rem",
    position: "sticky",
    top: 0,
    left: 0,
    background: "#fff",
    zIndex: 3,
    // boxShadow: "var(--shadow-light)",
    fontFamily: '"Playball", cursive',
    display: "flex",
    alignItems: "center",

    "& h3": {
      fontSize: "2rem",
      marginRight: "auto"
    }
  },
  menu: {
    width: "1.6rem",
    marginRight: "1.3rem"
  },
  bookmarkWrapper: {
    position: "relative",
    "&::after": {
      content: "attr(data-badge)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      position: "absolute",
      top: -8,
      right: -5,
      width: "1.7rem",
      height: "1.7rem",
      padding: 3,
      paddingTop: 4,
      background: "var(--color-midnight-blue)",
      color: "var(--color-grey-light-2)"
    }
  },
  bookmarkImage: {
    width: "2rem",
    position: "relative",
    display: "block"
  }
};

const Header = ({ classes }) => {
  const [boxShadow, setBoxShadow] = useState("none");
  const handleScrollEvent = event => {
    if (window.pageYOffset >= 10) {
      setBoxShadow("var(--shadow-light)");
    } else {
      setBoxShadow("none");
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScrollEvent);
    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  return (
    <>
      <header class={classes.header} style={{ boxShadow }}>
        {/* <img src={MenuIcon} alt={"Menu"} class={classes.menu} width={"100%"} /> */}
        <h3>Fortnightly</h3>
        <div data-badge={"3"} class={classes.bookmarkWrapper}>
          <img
            src={BookmarkIcon}
            alt={"Bookmark"}
            class={classes.bookmarkImage}
          />
        </div>
      </header>
    </>
  );
};

export default withStyles(styles)(Header);

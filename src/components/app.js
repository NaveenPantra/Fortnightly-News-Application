import { h, Component } from "preact";
import { Router } from "preact-router";
import { Provider } from "react-redux";
import store from "./../redux/store";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";
import Article from "../routes/article";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Provider store={store}>
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Profile path="/profile/:user" />
            <Article path="/article/:newsID" />
          </Router>
        </Provider>
      </div>
    );
  }
}

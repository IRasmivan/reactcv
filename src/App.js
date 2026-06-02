import React, { Component } from "react";
import Sidebar from "./components/sidebar";
import CookieConsentBanner from "./components/cookieConsentBanner";
import Introduction from "./components/introduction";
import About from "./components/about";
import Blog from "./components/blog";
import Timeline from "./components/timeline";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <About />
            <Timeline />
            <Blog />
          </div>
        </div>
        <CookieConsentBanner />
      </div>
    );
  }
}

export default App;

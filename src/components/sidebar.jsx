import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <a
            href="#"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </a>
          <aside
            id="colorlib-aside"
            role="complementary"
            className="border js-fullheight"
          >
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Rasmivan Ilangovan</a>
              </h1>
              <span className="email">
                <i className="icon-mail" />
                rasmivancse@gmail.com
              </span>
              <span className="email">
                <i className="icon-phone" /> +44-745-966-9676
              </span>
              <span className="number">
                <i className="icon-whatsapp" /> +91-848-953-2988
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="about">
                      About
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="blog">
                      Blog
                    </a>
                  </li> */}
                  <li>
                    <a href="#" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/rasmivan.ilangovan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/rasmivan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rasmivan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rasmivan-ilangovan-a9853b70/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/IRasmivan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github" />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://medium.com/@dhruv.barochia34788"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-blogger2" />
                  </a>
                </li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-code" aria-hidden="true" />
                  <br />
                  Thanks{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  for inspiration
                </small>
              </p>
              <p>
                <small>
                  Automated build using Docker and deployment using Jenkins
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

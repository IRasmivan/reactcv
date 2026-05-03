import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(./images/img_bg.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi, I'm Rasmi.
                            <br />
                            I build resilient backend systems.
                          </h1>
                          <h2>
                            Scala engineer delivering AWS-backed media workflows,
                            automation, and production services at ITV.
                          </h2>
                          <p className="hero-actions">
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://drive.google.com/file/d/1QtOa-M_GLgSHOWkckpWT6WKhDliHkA3_/view"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                              <i className="icon-download4" />
                            </a>
                            <a
                              className="btn btn-primary btn-learn"
                              href="mailto:rasmivancse@gmail.com"
                              aria-label="Email Rasmivan"
                            >
                              Email Me <i className="icon-mail" />
                            </a>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/IRasmivan"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-github" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

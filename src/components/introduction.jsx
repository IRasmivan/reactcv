import React, { Component } from "react";
import { trackEvent } from "../analytics";
import { resumeUrl } from "../data/profile";

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
                            Scala engineer building reliable backend systems.
                          </h1>
                          <h2>
                            I build AWS-backed services, delivery workflows, and automation
                            for media platforms, with hands-on work across CI/CD, Terraform,
                            LLM tooling, and production operations at ITV.
                          </h2>
                          <p className="hero-actions">
                            <a
                              className="btn btn-primary btn-learn"
                              href={resumeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() =>
                                trackEvent("resume_click", {
                                  location: "hero",
                                })
                              }
                            >
                              View CV
                              <i className="icon-download4" />
                            </a>
                            <a
                              className="btn btn-primary btn-learn"
                              href="mailto:rasmivancse@gmail.com"
                              aria-label="Email Rasmivan"
                              onClick={() =>
                                trackEvent("contact_click", {
                                  location: "hero",
                                  method: "email",
                                })
                              }
                            >
                              Email Me <i className="icon-mail" />
                            </a>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/IRasmivan"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() =>
                                trackEvent("outbound_click", {
                                  location: "hero",
                                  destination: "github",
                                })
                              }
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

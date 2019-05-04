import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">Work at TCS</a> <span>2008-present</span>
                        </h2>
                        <p>
                          I have started my career with TCS on Dec, 2008. My key
                          expertise area is creating sustainable and flexible
                          application for Web, Desktop & Mobile hosting in
                          cloud. I've worked with programming languages like
                          Java, C#, Python; scripting languages like
                          Javascripts, typescript & VBScript; I work with
                          container technology like Docker and
                          container-orchrastation technologies like K8s and use
                          CI/CD pipelines to do rapid development; I work with
                          cloud platform like Azure and AWS.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">
                            Undergraduation at Pondicherry University
                          </a>{" "}
                          <span>2004-2008</span>
                        </h2>
                        <p>
                          I completed my under-graduation degree of B.Tech in
                          C.S.E.(Computer Science and Engineering). My final
                          year project was a web-service develoved in C# using
                          .Net framework demonstrate SOA (Service Oriented
                          Architecture).
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">Higher Education</a>{" "}
                          <span>2002-2004</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry, Maths & Computer
                          Science. During my school time, I have developed
                          interest in computer programming by introduction to C,
                          C++, Javascripts & HTML to build softwares.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

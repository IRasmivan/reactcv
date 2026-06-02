import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section id="timeline" className="colorlib-experience" data-section="timeline">
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
                      <div className="timeline-icon color-2">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          ITV <span>June 2023 - Present</span>
                        </h2>
                        <p>
                          Scala Engineer building services that process high-volume media workflow data.
                          My work spans Scala backend development, selected React-based interfaces,
                          containerized deployment, and delivery through Nomad and GitHub Actions.
                        </p>
                      </div>
                    </div>
                  </article>
                <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-7">
                        <i className="icon-pin-outline" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Intent HQ <span>Sept 2021 - June 2023</span>
                        </h2>
                        <p>
                          Worked as a Scala Engineer on data-intensive services and supporting delivery workflows,
                          contributing across backend development, cloud deployment, and operational tooling.
                        </p>
                      </div>
                    </div>
                  </article>
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
                          Tata Consultancy Services <span>Dec 2008 - Aug 2021</span>
                        </h2>
                        <p>
                          I started my career at TCS and built a broad engineering foundation across web,
                          desktop, and cloud-hosted applications. Over that period I worked with Java, C#,
                          Python, JavaScript, TypeScript, Docker, Kubernetes, CI/CD pipelines, and both Azure and AWS.
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
                          Pondicherry University <span>2004 - 2008</span>
                        </h2>
                        <p>
                          Completed a B.Tech in Computer Science and Engineering.
                          My final-year project was a C# web service built on .NET to demonstrate
                          service-oriented architecture concepts.
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
                          Higher Secondary Education <span>2002 - 2004</span>
                        </h2>
                        <p>
                          Studied Physics, Chemistry, Mathematics, and Computer Science.
                          This was also where my interest in programming began through early work with
                          C, C++, JavaScript, and HTML.
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

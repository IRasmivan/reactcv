import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I have {(new Date().getFullYear()) - 2009}+ years of IT experience. I am a Java & Scala
                        microservice developer, Angular & React UI developer, I
                        do build and maintain environment using Git, Jenkins,
                        Docker, K8s, Nomad. I am a Full Stack Developer in short.
                        Currently I'm learning No-SQL DB (Mongo). I love making
                        websites, service building and to automate everything.
                      </p>
                      <p>
                        I have started reflecting my ideas through
                        websites/webpages, eventhough I have developed many
                        websites in my career this is new for me to express my
                        own thought through this media, if you have any
                        suggestion you can write me back.
                      </p>
                      <p>
                        I am currently exploring AI-assisted workflow
                        automation in the media domain. My recent proof of
                        concept uses n8n to orchestrate LLM-driven flows and a
                        graph database to support natural language search,
                        helping turn loosely structured media knowledge into
                        something teams can query more intuitively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div
                className="col-md-4 text-center animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-code" />
                  </span>
                  <div className="desc">
                    <h3>Microservice Development </h3>
                    <p>
                      I have massive experience in building microservices using
                      Java Spring Boot, Spring Batch. I've detailed
                      understanding of Microservice architecture.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 text-center animate-box"
                data-animate-effect="fadeInTop"
              >
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-globe" />
                  </span>
                  <div className="desc">
                    <h3>Web Development</h3>
                    <p>
                      I have developed websites in Angular and React. This page
                      is developed using React. I use NPM to manage build and
                      package for web development.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 text-center animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-lab2" />
                  </span>
                  <div className="desc">
                    <h3>LLM and Workflow Automation</h3>
                    <p>
                      I have built POCs with n8n and LLMs in the media domain,
                      using graph-backed data models to enable natural
                      language search and more intuitive knowledge discovery
                      workflows.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 text-center animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-briefcase" />
                  </span>
                  <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>
                      I automate my build and deployment using Git, Jenkins,
                      Docker, K8s to get the job done. I am currently using
                      Azure and AWS in my daily job.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 text-center animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Mobile Development</h3>
                    <p>
                      I have developed an app in iOS using Objective-C and in
                      Android using Java. I've basic knowledge of App
                      development for iOS and Android.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 text-center animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-tag" />
                  </span>
                  <div className="desc">
                    <h3>Frameworks/Tools</h3>
                    <p>
                      Built APIs using Django and automation flows using tools
                      like Jenkins, Groovy, and n8n. I am also exploring LLM
                      integrations, graph-backed search, and data models that
                      make natural language discovery practical for real-world
                      products.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 text-center animate-box"
                data-animate-effect="fadeInTop"
              >
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-stopwatch" />
                  </span>
                  <div className="desc">
                    <h3>Hobby</h3>
                    <p>
                      Running is my passion! I am a marathoner and an ultra
                      marathoner. My longest distance marathon is 100 miles
                      covered in 35 hours and planning to run 200 miles. I am
                      currently training for triathlon. I've participated in 56
                      marathons till date and would like to complete 1000+
                      marathons before i kick the bucket.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

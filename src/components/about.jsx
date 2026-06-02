import React, { Component } from "react";

export default class About extends Component {
  handleSkillIconError = (event) => {
    event.currentTarget.style.display = "none";

    const fallback = event.currentTarget.parentElement?.querySelector(
      ".skills-strip__dot--fallback"
    );

    if (fallback) {
      fallback.style.display = "inline-flex";
    }
  };

  render() {
    const skillGroups = [
      {
        title: "Engineering",
        markerClass: "color-1",
        items: [
          { label: "Scala", icon: "https://cdn.simpleicons.org/scala/DC322F" },
          { label: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
          {
            label: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          },
          { label: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
          { label: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
          { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
          { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        ],
      },
      {
        title: "AI & Automation",
        markerClass: "color-4",
        items: [
          { label: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
          { label: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
          { label: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/000000" },
          { label: "OpenAI", icon: "https://cdn.simpleicons.org/openai/412991" },
          { label: "LLM Workflow Design" },
          { label: "Prompt Engineering" },
        ],
      },
      {
        title: "Cloud, Data & Messaging",
        markerClass: "color-2",
        items: [
          {
            label: "AWS Lambda",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS S3",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS CloudWatch",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS Step Functions",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS SQS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "PostgreSQL",
            icon: "https://cdn.simpleicons.org/postgresql/4169E1",
          },
          {
            label: "MongoDB",
            icon: "https://cdn.simpleicons.org/mongodb/47A248",
          },
          {
            label: "Kafka",
            icon: "https://cdn.simpleicons.org/apachekafka/231F20",
          },
          {
            label: "RabbitMQ",
            icon: "https://cdn.simpleicons.org/rabbitmq/FF6600",
          },
          {
            label: "Azure",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          },
          { label: "Contentful", icon: "https://cdn.simpleicons.org/contentful/2478CC" },
        ],
      },
      {
        title: "Delivery & Observability",
        markerClass: "color-3",
        items: [
          { label: "Terraform", icon: "https://cdn.simpleicons.org/terraform/844FBA" },
          { label: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
          {
            label: "GitHub Actions",
            icon: "https://cdn.simpleicons.org/githubactions/2088FF",
          },
          { label: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
          { label: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
          { label: "Nomad", icon: "https://cdn.simpleicons.org/nomad/00CA8E" },
          { label: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus/E6522C" },
          { label: "Grafana", icon: "https://cdn.simpleicons.org/grafana/F46800" },
        ],
      },
    ];

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
                      <div className="profile-summary" aria-label="Professional summary">
                        <div className="profile-summary__item">
                          <span className="profile-summary__label">Current role</span>
                          <span className="profile-summary__value">Scala Engineer at ITV</span>
                        </div>
                        <div className="profile-summary__item">
                          <span className="profile-summary__label">Core focus</span>
                          <span className="profile-summary__value">Backend systems, AWS workflows, CI/CD, Terraform, LLMs, and n8n</span>
                        </div>
                        <div className="profile-summary__item">
                          <span className="profile-summary__label">Experience</span>
                          <span className="profile-summary__value profile-summary__value--accent">
                            {(new Date().getFullYear()) - 2009}+ years
                          </span>
                          <span className="profile-summary__meta">Software delivery across backend, cloud, and web, with infrastructure ownership when needed</span>
                        </div>
                      </div>
                      <p>
                        I have {(new Date().getFullYear()) - 2009}+ years of software engineering experience across backend systems,
                        cloud platforms, and user-facing delivery. My core background is in Scala and Java
                        microservices, supported by hands-on Angular and React work where the product requires it.
                        Today, most of my work centers on Scala services running on AWS for ITV, along with the
                        build, runtime, and platform tooling needed to keep media workflows reliable at scale.
                      </p>
                      <p>
                        I enjoy building products and automation that reduce repetitive work,
                        improve operational visibility, and help teams move faster with less friction.
                        This site is a small public space where I share selected experience, writing,
                        and the kinds of engineering problems I like to solve.
                      </p>
                      <p>
                        I also spend time exploring AI-assisted workflow automation in the media domain.
                        Recent proof-of-concept work has included LLM-orchestrated flows, natural-language search,
                        and knowledge tooling aimed at making loosely structured operational information easier to use.
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
                <span className="heading-meta">Core Capabilities</span>
                <h2 className="colorlib-heading">How I Build</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInUp">
                <div className="skills-board" aria-label="Core tools and technologies">
                  {skillGroups.map((group) => (
                    <section className="skills-row" key={group.title}>
                      <div className="skills-row__title-wrap">
                        <span className={`skills-row__marker ${group.markerClass}`} aria-hidden="true" />
                        <h3 className="skills-row__title">{group.title}</h3>
                      </div>
                      <div className="skills-row__list">
                        {group.items.map((tool) => (
                          <span className="skills-chip" key={tool.label}>
                            {tool.icon ? (
                              <>
                                <img
                                  className="skills-chip__icon"
                                  src={tool.icon}
                                  alt=""
                                  loading="lazy"
                                  aria-hidden="true"
                                  onError={this.handleSkillIconError}
                                />
                                <span
                                  className="skills-chip__dot skills-chip__dot--fallback"
                                  aria-hidden="true"
                                />
                              </>
                            ) : (
                              <span className="skills-chip__dot" aria-hidden="true" />
                            )}
                            <span className="skills-chip__label">{tool.label}</span>
                          </span>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Experience Highlights</span>
                <h2 className="colorlib-heading">What I Build</h2>
              </div>
            </div>
            <div className="row row-pt-md experience-grid">
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
                      I currently build Scala microservices for ITV, including
                      self-service onboarding flows integrated with Zoho CMS
                      and ingest services migrated from Go to Scala. That work
                      improved BlackPearl media restore speed by 50% while
                      supporting day-to-day delivery at scale.
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
                      I build front-end and self-service interfaces using
                      Angular, React, TypeScript, and Next.js. This site is a
                      small public example, but my day-to-day work is usually
                      focused on internal product and operations workflows.
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
                      I work across Terraform, Docker, Kubernetes, PagerDuty,
                      and AWS operational tooling to keep services observable
                      and supportable. Recent work helped move incident
                      handling from reactive troubleshooting to proactive
                      monitoring and reduced critical issue diagnosis from a
                      4-person effort to a single-person task.
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
                      My working environment spans Scala, Go, AWS, PostgreSQL,
                      BlackPearl, Zoho CMS, Terraform, and automation tooling
                      such as Jenkins and n8n. I also use AI tools in a
                      practical way to prototype workflow automation and make
                      search-heavy systems easier to operate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Beyond Work</span>
                <h2 className="colorlib-heading">What Keeps Me Going</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div
                className="col-md-6 col-md-offset-3 text-center animate-box"
                data-animate-effect="fadeInTop"
              >
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-stopwatch" />
                  </span>
                  <div className="desc">
                    <h3>Running</h3>
                    <p>
                      Running is my passion. I am a marathoner and an ultra
                      marathoner, with a longest distance of 100 miles covered
                      in 35 hours. I am currently training for triathlon,
                      have participated in 56 marathons so far, and would love
                      to keep pushing that number much higher.
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

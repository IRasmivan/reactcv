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
        title: "Core Engineering",
        markerClass: "color-1",
        items: [
          { label: "Scala", icon: "https://cdn.simpleicons.org/scala/DC322F" },
          { label: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
          { label: "Cats", icon: "https://cdn.simpleicons.org/scala/DC322F" },
          {
            label: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          },
          { label: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
          { label: "Spring Batch", icon: "https://cdn.simpleicons.org/spring/6DB33F" },
          { label: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
          { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
          { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
          { label: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
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
          { label: "n8n AI Orchestration", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
          { label: "LLM Workflow Design" },
          { label: "Prompt Engineering" },
          {
            label: "Google Apps Script",
            icon: "https://cdn.simpleicons.org/googleappsscript/34A853",
          },
        ],
      },
      {
        title: "Cloud & Platform",
        markerClass: "color-2",
        items: [
          {
            label: "AWS Lambda",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS EC2",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS S3",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS IAM",
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
            label: "AWS SNS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS Secrets Manager",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS MediaConvert",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS ECR",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          { label: "BlackPearl" },
          { label: "Zoho CMS", icon: "https://cdn.simpleicons.org/zoho/C8202F" },
          {
            label: "Azure Logic Apps",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          },
          {
            label: "Azure Service Bus",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          },
          {
            label: "Azure PaaS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          },
          { label: "Contentful", icon: "https://cdn.simpleicons.org/contentful/2478CC" },
        ],
      },
      {
        title: "Data & Messaging",
        markerClass: "color-5",
        items: [
          { label: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
          { label: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
          {
            label: "AWS DynamoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          {
            label: "AWS RDS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          },
          { label: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
          { label: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/231F20" },
        ],
      },
      {
        title: "DevOps & Delivery",
        markerClass: "color-3",
        items: [
          { label: "Terraform", icon: "https://cdn.simpleicons.org/terraform/844FBA" },
          { label: "aws-vault", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
          { label: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
          {
            label: "GitHub Actions",
            icon: "https://cdn.simpleicons.org/githubactions/2088FF",
          },
          { label: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
          {
            label: "Azure DevOps",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
          },
          { label: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC" },
          { label: "Confluence", icon: "https://cdn.simpleicons.org/confluence/172B4D" },
          { label: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
          { label: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
          { label: "Nomad", icon: "https://cdn.simpleicons.org/nomad/00CA8E" },
          { label: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus/E6522C" },
          { label: "Grafana", icon: "https://cdn.simpleicons.org/grafana/F46800" },
          { label: "PagerDuty", icon: "https://cdn.simpleicons.org/pagerduty/06AC38" },
          {
            label: "Slack",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
          },
        ],
      },
      {
        title: "Architecture & Ways of Working",
        markerClass: "color-6",
        items: [
          { label: "Microservice Architecture" },
          { label: "DSA" },
          { label: "Agile" },
          { label: "Scrum" },
          { label: "SAFe Agile" },
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
                      <p>
                        I have {(new Date().getFullYear()) - 2009}+ years of IT experience. I am a Scala and Java
                        microservice developer, with hands-on Angular and React
                        delivery experience. My current day-to-day focus is
                        mostly Scala services on AWS for ITV, alongside the
                        build, runtime, and platform tooling needed to keep
                        media workflows running reliably at scale. I enjoy
                        building products, backend services, and automation
                        that remove repetitive work and improve operational
                        visibility.
                      </p>
                      <p>
                        I have started reflecting my ideas through
                        websites/webpages, eventhough I have developed many
                        websites in my career this is new for me to express my
                        own thought through this media, if you have any
                        suggestion you can write me back.
                      </p>
                      <p>
                        I also actively work with AI-assisted workflow
                        automation in the media domain. My recent proof of
                        concept uses n8n to orchestrate LLM-driven flows with
                        Google Gemini, GitHub Copilot, and OpenAI, alongside a
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
                <span className="heading-meta">Core Capabilities</span>
                <h2 className="colorlib-heading">How I Build</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInUp">
                <div className="skills-board" aria-label="Core tools and technologies">
                  <div className="skills-board__intro">
                    <span className="skills-board__eyebrow">Current focus</span>
                    <p className="skills-board__summary">
                      Scala backend engineering, AWS media-platform delivery, and workflow automation define most of my current work.
                    </p>
                    <p className="skills-board__spotlight">
                      At ITV, that shows up in self-service onboarding, asset ingest and restore workflows, observability improvements, and practical AI-assisted workflow design.
                    </p>
                  </div>
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

import React, { Component } from "react";
import ContentDiv from "../ContentDiv/ContentDiv";
import style from "./Main.module.scss";
import FetchText from "../FetchText/FetchText";
import "font-awesome/css/font-awesome.min.css";

class Main extends Component {
  render() {
    let text = FetchText();
    console.log(text);
    let boxes = {
      small: {
        flex: "0 0 30%",
        margin: "20px"
      },
      large: {
        flex: "0 0 60%",
        margin: "20px",
        background: "#e4e4e4"
      }
    };
    return (
      <div className={style.Wrapper}>
        <ContentDiv title={"About Me"} />
        <main style={style.Main}>
          <ContentDiv styles={boxes.small}>
            <h1>
              <i className="fa fa-graduation-cap" /> Education
            </h1>
            <p>{"B.Tech, Computer Science Engineering. (2008)"}</p>
            <h1>
              <i class="fa fa-language" /> {"Languages"}
            </h1>
            <p>{"English, Tamil"}</p>
            <h1>
              <i class="fa fa-suitcase" /> Skills
            </h1>
            <p STYLE="text-align:left;margin-left: 15px;">
              <ul>
                <li>Java</li>
                <li>Angular</li>
                <li>Microservice</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>SQL</li>
                <li>Postgres</li>
                <li>jenkins</li>
                <li>CI/CD</li>
                <li>AWS</li>
                <li>Azure</li>
                <li>Hands on Python & React.js</li>
              </ul>
            </p>
          </ContentDiv>
          <ContentDiv styles={boxes.large}>
            <div STYLE="text-align:justify;margin: 2px;">
              <p>I have 10+ years of IT expreanse</p>
              <p>
                I am a Java microservice, Angular and Devops (Full Stack
                Developer). Currently i'm learning to use React, Node.js and
                Express.
              </p>
              <p>
                As part of my daily work I use git in my projects. I recently
                rediscovered my love for making websites, service building and
                automating everything
              </p>
            </div>
          </ContentDiv>
        </main>
      </div>
    );
  }
}

export default Main;

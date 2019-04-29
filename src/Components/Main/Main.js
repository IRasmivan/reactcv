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
        margin: "20px"
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
            <p>
              {
                "Java, Angular, Microservice, Docker, Kubernetes, SQL, Postgres, jenkins, CI/CD, AWS, Azure, Hands on Python & React.js"
              }
            </p>
          </ContentDiv>
          <ContentDiv styles={boxes.large}>{text}</ContentDiv>
        </main>
      </div>
    );
  }
}

export default Main;

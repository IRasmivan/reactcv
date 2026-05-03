import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
            aria-label="Toggle navigation"
          >
            <i aria-hidden="true" />
          </button>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                role="img"
                aria-label="Portrait of Rasmivan Ilangovan"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="/">Rasmivan Ilangovan</a>
              </h1>
              <a
                className="contact-item contact-item--email"
                href="mailto:rasmivancse@gmail.com"
                aria-label="Email rasmivancse@gmail.com"
              >
                <span className="contact-item__icon" aria-hidden="true">
                  <i className="icon-mail" />
                </span>
                <span className="contact-item__text">rasmivancse@gmail.com</span>
              </a>
              <a
                className="contact-item contact-item--phone"
                href="tel:+447459669676"
                aria-label="Call +44-745-966-9676"
              >
                <span className="contact-item__icon" aria-hidden="true">
                  <i className="icon-phone" />
                </span>
                <span className="contact-item__text">+44-745-966-9676</span>
              </a>
              <a
                className="contact-item contact-item--whatsapp"
                href="https://wa.me/918489532988"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on WhatsApp +91-848-953-2988"
              >
                <span className="contact-item__icon" aria-hidden="true">
                  <i className="icon-whatsapp" />
                </span>
                <span className="contact-item__text">+91-848-953-2988</span>
              </a>
            </div>
            <nav id="colorlib-main-menu" className="navbar" aria-label="Section navigation">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#colorlib-hero" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      Profile
                    </a>
                  </li>
                  {/* <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li>*/}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#blog" data-nav-section="blog">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav className="social-links" aria-label="Social links">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/rasmivan.ilangovan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="icon-facebook2" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/rasmivan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <i className="icon-twitter2" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rasmivan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="icon-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rasmivan-ilangovan-a9853b70/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="icon-linkedin2" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/IRasmivan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="icon-github" aria-hidden="true" />
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
                  Built in React
                  <br />
                  Inspired by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>
                </small>
              </p>
              <p>
                <small>
                  Built and deployed via GitHub Actions
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

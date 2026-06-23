import React, { Component } from "react";
import {
  clearStoredAnalyticsConsent,
  isAnalyticsConfigured,
  trackEvent,
} from "../analytics";
import { resumeUrl } from "../data/profile";

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
              <p className="sidebar-role">
                Scala engineer focused on backend systems, AWS delivery, CI/CD, and workflow automation.
              </p>
              <a
                className="contact-item contact-item--email"
                href="mailto:rasmivancse@gmail.com"
                aria-label="Email rasmivancse@gmail.com"
                onClick={() =>
                  trackEvent("contact_click", {
                    location: "sidebar",
                    method: "email",
                  })
                }
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
                onClick={() =>
                  trackEvent("contact_click", {
                    location: "sidebar",
                    method: "phone",
                  })
                }
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
                onClick={() =>
                  trackEvent("contact_click", {
                    location: "sidebar",
                    method: "whatsapp",
                  })
                }
              >
                <span className="contact-item__icon" aria-hidden="true">
                  <i className="icon-whatsapp" />
                </span>
                <span className="contact-item__text">+91-848-953-2988</span>
              </a>
              <a
                className="sidebar-resume-link"
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume"
                onClick={() =>
                  trackEvent("resume_click", {
                    location: "sidebar",
                  })
                }
              >
                <span className="sidebar-resume-link__icon" aria-hidden="true">
                  <i className="icon-download4" />
                </span>
                <span className="sidebar-resume-link__text">View Resume</span>
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
              <p className="sidebar-section-label">Find me on</p>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rasmivan-ilangovan-a9853b70/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    onClick={() =>
                      trackEvent("outbound_click", {
                        location: "sidebar",
                        destination: "linkedin",
                      })
                    }
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
                    onClick={() =>
                      trackEvent("outbound_click", {
                        location: "sidebar",
                        destination: "github",
                      })
                    }
                  >
                    <i className="icon-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@coderlearning3716"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    onClick={() =>
                      trackEvent("outbound_click", {
                        location: "sidebar",
                        destination: "youtube",
                      })
                    }
                  >
                    <i className="icon-youtube" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.rasmivan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Blog"
                    onClick={() =>
                      trackEvent("outbound_click", {
                        location: "sidebar",
                        destination: "blog",
                      })
                    }
                  >
                    <i className="icon-blogger2" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Built with React and maintained as a lightweight personal site.
                </small>
              </p>
              <p>
                <small>
                  Deployed through GitHub Actions and GitHub Pages.
                </small>
              </p>
              {isAnalyticsConfigured() ? (
                <p>
                  <button
                    type="button"
                    className="footer-link-button"
                    onClick={clearStoredAnalyticsConsent}
                  >
                    Change cookie preferences
                  </button>
                </p>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

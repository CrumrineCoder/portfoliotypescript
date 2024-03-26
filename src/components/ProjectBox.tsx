import React, { Component } from "react";
import logo from "../assets/images/bardicLogo.png"
interface ProjectBoxProps {
  key: any;
  project: {
    logo: string;
    color: string;
    projectName: string;
    shortDesc: string;
    frontend: string;
    backend: string;
    productPaper: string;
    codeLink: string;
    websiteLink: string;
    caseStudyLink: string;
    video: string;
    class: string;
  };
  selected: any;
  onclick: any;
  noProjectSelected: boolean;
}

class ProjectBox extends Component<ProjectBoxProps> {
  constructor(props: ProjectBoxProps) {
    super(props);
    console.log(props);
    this.state = {};
  }

  render() {
    return (
      <button
        className="landingBox"
        onMouseOver={() => this.props.onclick(this.props.key)}
        style={{ background: this.props.project.color }}
        key={this.props.key}
      >
        <div
          className="landingBoxInner"
          style={{ backgroundImage: `url(${this.props.project.logo})` }}
        >
          <a
            href={this.props.project.codeLink}
            className={
              this.props.project.caseStudyLink === undefined
                ? "landingBoxExternalLink landingBoxExternalLink2"
                : "landingBoxExternalLink landingBoxExternalLink3"
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <li
              className={
                this.props.noProjectSelected
                  ? this.props.project.class + "Pill hiddenLink"
                  : this.props.selected
                  ? this.props.project.class + "Pill"
                  : this.props.project.class + "Pill hiddenLink"
              }
              id="code-link"
            >
              <div>
                <i className="fas fa-code fontIcon" />
                See Code
              </div>
            </li>
          </a>
          <a
            href={this.props.project.websiteLink}
            className={
              this.props.project.caseStudyLink === undefined
                ? "landingBoxExternalLink landingBoxExternalLink2"
                : "landingBoxExternalLink landingBoxExternalLink3"
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <li
              className={
                this.props.noProjectSelected
                  ? this.props.project.class + "Pill hiddenLink"
                  : this.props.selected
                  ? this.props.project.class + "Pill"
                  : this.props.project.class + "Pill hiddenLink"
              }
              id="website-link"
            >
              <div>
                <i className="fas fa-external-link-alt fontIcon" />
                Visit Website
              </div>
            </li>
          </a>
          {this.props.project.caseStudyLink !== undefined && (
            <a
              href={this.props.project.caseStudyLink}
              className={
                this.props.project.caseStudyLink === undefined
                  ? "landingBoxExternalLink landingBoxExternalLink2"
                  : "landingBoxExternalLink landingBoxExternalLink3"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <li
                className={
                  this.props.noProjectSelected
                    ? this.props.project.class + "Pill hiddenLink"
                    : this.props.selected
                    ? this.props.project.class + "Pill"
                    : this.props.project.class + "Pill hiddenLink"
                }
                id="case-link"
              >
                <div>
                  <i className="fas fa-book-open fontIcon" />
                  Case Study
                </div>
              </li>
            </a>
          )}
        </div>
      </button>
    );
  }
}

export default ProjectBox;

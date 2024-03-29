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
  selectedProject: boolean;
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
    const { selectedProject, noProjectSelected, project } = this.props;
    const classPill = selectedProject ? project.class + "Pill" : project.class + "Pill hiddenLink";

    return (
      <>
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
              className={noProjectSelected ? classPill + " hiddenLink" : classPill}
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
              className={noProjectSelected ? classPill + " hiddenLink" : classPill}
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
              <li className={noProjectSelected ? classPill + " hiddenLink" : classPill}>
                <div>
                  <i className="fas fa-file-alt fontIcon" />
                  Case Study
                </div>
              </li>
            </a>
          )}
        </div>
      </button>
      </>
    );
  }
}
export default ProjectBox;

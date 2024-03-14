import React, { Component } from "react";

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
}

class ProjectBox extends Component<ProjectBoxProps> {
  constructor(props: ProjectBoxProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        className="landingBox"
        onMouseOver={() => this.props.onclick(this.props.key)}
        style={{ background: this.props.project.color }}
        key={this.props.key}
      ></button>
    );
  }
}

export default ProjectBox;

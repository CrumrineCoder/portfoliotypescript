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
        this.state = {

        }
        //this.state = this.props;
    }

    render() {
        return (
            <div style={{ background: this.props.project.color }}>
                {/* Your JSX code here */}
            </div>
        );
    }
}

export default ProjectBox;
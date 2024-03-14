import React, { Component } from "react";

import ProjectBox from "../components/ProjectBox.js";

import { Dispatch } from "react";

interface ProjectBoxesContainerProps {
  selectedProject: any;
  setSelectedProject: Dispatch<any>;
  projectData: {
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
  }[];
}

const ProjectBoxesContainer: React.FC<ProjectBoxesContainerProps> = ({
  selectedProject,
  setSelectedProject,
  projectData,
}) => {
    return (
        <div>
            {projectData.map((project, index) => (
                <ProjectBox
                    key={index}
                    project={project}
                    selected={selectedProject === project}
                    onclick={() => setSelectedProject(project)}
                />
            ))}
        </div>
    );
};

export default ProjectBoxesContainer;

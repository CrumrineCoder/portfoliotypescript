import React, { Component } from "react";

import ProjectBox from "../components/ProjectBox";

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
    websiteLink?: string| undefined;
    caseStudyLink?: string| undefined;
    freeCodeCampLink?: string | undefined;
    video: string;
    classToAdd: string;
  }[];
  noProjectSelected: boolean;
}

const ProjectBoxesContainer: React.FC<ProjectBoxesContainerProps> = ({
  selectedProject,
  setSelectedProject,
  projectData,
  noProjectSelected,
}) => {
    return (
        <div className={
          !noProjectSelected
              ?projectData[selectedProject].classToAdd +
              "Bar landingBoxesContainer customScrollBar"
              : "landingBoxesContainer customScrollBar defaultBar"
      }>
            {projectData.map((project, index) => (
                <ProjectBox
                    key={index}
                    project={project}
                    selectedProject={selectedProject === index}
                    onclick={() => setSelectedProject(index)}
                    noProjectSelected={noProjectSelected}
                />
            ))}
        </div>
    );
};

export default ProjectBoxesContainer;

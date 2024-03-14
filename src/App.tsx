import "./App.scss";

import React, { useState } from "react";
import Header from "./components/header";

import NPC from "./assets/videos/NPC.mp4";
import ProjectBoxesContainer from "./containers/ProjectBoxesContainer";

const projectData = [
  {
    logo: "../assets/images/bardicLogo.png",
    color: "#E9C46A",
    projectName: "Bardic Inspiration",
    shortDesc: "MERN Music Tagging site",
    frontend: "React.js, React Hooks, Redux.js, react-router, HTML5, CSS3",
    backend:
      "JavaScript, AWS, MongoDB, Mongoose, Express.js, Node.js, JWT, Passport, OpenVPN",
    productPaper:
      "This website was meant to be a simple implementation of a tool, but grew into a study on React Hooks and Sagas, AWS and web security, Redux, and more.",
    codeLink: "https://github.com/CrumrineCoder/Bard-Release",
    websiteLink: "https://confectionswithcharacter.com/",
    caseStudyLink: "https://nicolascrumrine.com/#/posts/-Lntx2aWkC23w704-4z-",
    video: "../assets/videos/Bardic Inspiration2.mp4",
    class: "Bard",
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="App">
      <Header />
      <video src={NPC} autoPlay loop muted />
      <div className="landingBottomContainer">
        <ProjectBoxesContainer
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          projectData={projectData}
        />
      </div>
    </div>
  );
}

export default App;

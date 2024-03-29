import "./App.scss";

import React, { useState, useEffect } from "react";
import Header from "./components/header";

import NPC from "./assets/videos/NPC.mp4";
import ProjectBoxesContainer from "./containers/ProjectBoxesContainer";
import bardicLogo from "./assets/images/bardicLogo.png";
import raptureLogo from "./assets/images/raptureLogo.png";
const projectData = [
  {
    logo: bardicLogo,
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
  {
    logo: raptureLogo,
    color: "#218F7D",
    projectName: "Rapture Fashion",
    shortDesc: "React and Shopify Boutique Fashion site",
    frontend:
      "React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4",
    backend: "JavaScript, Shopify Storefront API, Firebase",
    productPaper:
      "This website was a study on UX research, UI design, marketing, and how to integrate Shopify with React all so I can build small business websites.",
    codeLink: "https://github.com/CrumrineCoder/RaptureFashion/",
    websiteLink: "https://rapture-fashion.firebaseapp.com/#/",
    caseStudyLink:
      "https://nicolascrumrine.com/#/posts/-LecEwsYvjJNcwIJJjao",
    video: "Videos/raptureFashion.mp4",
    class: "Rapture"
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  return (
    <div className="App">
      <Header />
      <video src={NPC} autoPlay loop muted />
      <div className="landingBottomContainer">
        <ProjectBoxesContainer
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          projectData={projectData}
          noProjectSelected={selectedProject === null}
        />
      </div>
    </div>
  );
}

export default App;

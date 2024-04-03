import "./App.scss";

import React, { useState, useEffect } from "react";
import Header from "./components/header";

import ProjectBoxesContainer from "./containers/ProjectBoxesContainer";

import bardicLogo from "./assets/images/bardicLogo.png";
import raptureLogo from "./assets/images/raptureLogo.png";
import votingLogo from "./assets/images/votingAppLogo.png";
import cookiesLogo from "./assets/images/cookiesWebsiteLogo.png";
import npcLogo from "./assets/images/npcLookUpLogo.png";
import twitchViewrLogo from "./assets/images/twitchViewerLogo.png";
import tmbgLogo from "./assets/images/tmbgLogo.png";
import connectFourLogo from "./assets/images/connectFourAppLogo.png";
import weatherLogo from "./assets/images/weatherApp logo.png";
import quotesLogo from "./assets/images/quotesAppLogo.png";
import wikipediaLogo from "./assets/images/wikipediaViewerLogo.png";
import calculatorLogo from "./assets/images/calculatorAppLogo.png";
import pomodoroLogo from "./assets/images/pomodoroAppLogo.png";

import baseVideo from "./assets/videos/portfolioMetro.mp4";

import bardicVideo from "./assets/videos/Bardic Inspiration2.mp4";
import raptureVideo from "./assets/videos/raptureFashion.mp4";
import pollingVideo from "./assets/videos/Polling.mp4";
import cookiesVideo from "./assets/videos/PennyJanesCookies.mp4";
import npcVideo from "./assets/videos/NPC.mp4";
import twitchVideo from "./assets/videos/Twitch.mp4";
import tmbgVideo from "./assets/videos/TMBG.mp4";
import connectFourVideo from "./assets/videos/C4.mp4";
import weatherVideo from "./assets/videos/Weather.mp4";
import quotesVideo from "./assets/videos/Quote.mp4";
import wikipediaVideo from "./assets/videos/wiki.mp4";
import calculatorVideo from "./assets/videos/C4.mp4";
import pomodoroVideo from "./assets/videos/Pomodoro.mp4";
import ProjectInfo from "./components/ProjectInfo";

import seanPFP from "./assets/images/Sean.jpg";
import robertPFP from "./assets/images/Robert.jpg";
import Recommendation from "./components/Recommendation";

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
    //   caseStudyLink: "https://nicolascrumrine.com/#/posts/-Lntx2aWkC23w704-4z-",
    video: bardicVideo,
    class: "Bard",
  },
  {
    logo: raptureLogo,
    color: "#218F7D",
    projectName: "Rapture Fashion",
    shortDesc: "React and Shopify Boutique Fashion site",
    frontend: "React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4",
    backend: "JavaScript, Shopify Storefront API, Firebase",
    productPaper:
      "This website was a study on UX research, UI design, marketing, and how to integrate Shopify with React all so I can build small business websites.",
    codeLink: "https://github.com/CrumrineCoder/RaptureFashion/",
    websiteLink: "https://rapture-fashion.firebaseapp.com/#/",
    //   caseStudyLink: "https://nicolascrumrine.com/#/posts/-LecEwsYvjJNcwIJJjao",
    video: raptureVideo,
    class: "Rapture",
  },
  {
    logo: votingLogo,
    color: "#A61C88",
    projectName: "Polling",
    shortDesc:
      "React.js & Redux fullstack website where users create, view, and vote on polls.",
    backend:
      "JavaScript, Node.js, Express.js, Firebase, MongoDB, Mongoose, jwt, Passport",
    frontend:
      "React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4, Responsive",
    productPaper:
      "Taught myself Redux and react-router with a backend. This version uses Firebase, Node version: https://github.com/CrumrineCoder/PollingReactNodeBase",
    codeLink: "https://github.com/CrumrineCoder/Polling",
    //  websiteLink: "https://polling-269dc.firebaseapp.com/#/",
    // prevWebsiteLink: "https://joinordie.glitch.me/",
    //  caseStudyLink: "https://nicolascrumrine.com/#/posts/-L_33SYjMlSMzQigh4QA",
    video: pollingVideo,
    class: "Poll",
  },
  {
    logo: cookiesLogo,
    color: "#18788C",
    projectName: "Penny's Cookies",
    shortDesc:
      "Portfolio website for a local NYC cookie bakery and decorating business that I built for a client.",
    backend: "JavaScript",
    frontend: "React.js, HTML5, CSS3, Responsive",
    productPaper:
      "Worked with another designer. Developed marketing strategy, wrote a competitive analysis, scheduled and wrote user stories with client.",
    codeLink: "https://github.com/CrumrineCoder/PennyJaneReact",
    websiteLink: "http://pennyjanescookies.com/",
    video: cookiesVideo,
    class: "Penny",
  },
  {
    logo: npcLogo,
    color: "#EF281A",
    picture: " Images/npcLookUpv2.png ",
    projectName: "NPC Lookup",
    shortDesc:
      "This fullstack website lets users add Non Playable Characters (NPCs) to a database and view them with Angular.",
    backend: "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport",
    frontend: "HTML5, CSS3, Responsive, Angular",
    productPaper:
      "I refined and expanded on Node.JS and Express.js and experimented with AngularJS alongside a database.",
    codeLink: "https://github.com/CrumrineCoder/NPC-LOOK-UP",
    websiteLink: "https://npclookup.glitch.me/",
    video: npcVideo,
    class: "NPC",
  },
  {
    logo: twitchViewrLogo,
    color: "#6441A4",
    picture: " Images/twitchViewer.png ",
    projectName: "Twitch Viewer",
    shortDesc:
      "This is a website that uses the Twitch.tv API and Angular to display Twitch Streams.",
    backend: "JavaScript, jQuery, Twitch.tv API",
    frontend: "HTML5, CSS3, Responsive, Angular",
    productPaper:
      "I taught myself one-page Angular design with this project as well as using multiple APIs with Angular.",
    codeLink: "https://github.com/CrumrineCoder/Twitch-Viewer-Redone",
    websiteLink: "https://crumrinecoder.github.io/Twitch-Viewer-Redone/",
    freeCodeCampLink:
      "https://www.freecodecamp.org/challenges/show-the-local-weather",
    video: twitchVideo,
    class: "Twitch",
  },
  {
    logo: tmbgLogo,
    color: "#171E26",
    projectName: "TMBG",
    shortDesc:
      "This is a landing page redesign for the They Might Be Giants website.",
    backend:
      "JavaScript, jQuery, Node.js, Express.js, MongoDB, Mongoose, OpenStreetMap API, LyricsAPI",
    frontend: "HTML5, CSS3, Responsive, Angular, Sass",
    productPaper:
      "The website allows users to anonymously comment on the newest album and to find the nearest tour. Also a practice in business marketing and design. Links and most buttons are placeholders.",
    codeLink: "https://github.com/CrumrineCoder/TheyMightBeGiantsv3",
    websiteLink: "https://tmbg.herokuapp.com/",
    video: tmbgVideo,
    class: "TMBG",
  },
  {
    logo: connectFourLogo,
    color: "#FF7F11",
    picture: " Images/connectFourApp.png ",
    projectName: "Connect Four",
    shortDesc:
      "This is a web app that uses plain JavaScript to play Connect Four either against an AI that uses alpha-beta minimaxing or locally with another player.",
    backend: "JavaScript, minimax Algorithms",
    frontend: "HTML5, CSS3",
    productPaper:
      "This was practice with independent research, JavaScript algorithm scripting, UI design for games, and artificial intelligence.",
    codeLink: "https://github.com/CrumrineCoder/connect4-version2",
    websiteLink: "https://crumrinecoder.github.io/connect4-version2/",
    freeCodeCampLink:
      "https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game",
    video: connectFourVideo,
    class: "C4",
  },
  {
    logo: weatherLogo,
    color: "#048027",
    picture: " Images/weatherApp.png ",
    projectName: "Weather",
    shortDesc: "This is a web app that shows the weather based on location.",
    backend: "JavaScript, jQuery, OpenStreetMap API, Forecast.io API,",
    frontend: "HTML5, CSS3, Responsive, Angular, Sass",
    productPaper:
      "I taught myself multiple APIs, Angular, Sass and Mobile-first design with this project.",
    codeLink: "https://github.com/CrumrineCoder/Weather-App",
    websiteLink: "https://crumrinecoder.github.io/Weather-App/",
    freeCodeCampLink:
      "https://www.freecodecamp.org/challenges/show-the-local-weather",
    video: weatherVideo,
    class: "Weather",
  },
  {
    logo: quotesLogo,
    color: "#008080",
    picture: " Images/quotesApp.png ",
    projectName: "Quotes",
    shortDesc:
      "This is a website that uses Angular to display quotes from various sources.",
    backend: "JavaScript, jQuery",
    frontend: "HTML5, CSS3, Responsive, Angular",
    productPaper:
      "I practiced Functional Programming and one page design in Angular and refined the design and User Experience.",
    codeLink: "https://github.com/CrumrineCoder/Quote-Generator-Version-2",
    websiteLink: "https://crumrinecoder.github.io/Quote-Generator-Version-2/",
    freeCodeCampLink:
      "https://www.freecodecamp.org/challenges/build-a-random-quote-machine",
    video: quotesVideo,
    class: "Quote",
  },
  {
    logo: wikipediaLogo,
    color: "#007CB6",
    picture: " Images/wikipediaViewer.png ",
    projectName: "Wiki Viewer",
    shortDesc:
      "This is a web app that uses the Wikipedia API to search for multiple Wikipedia pages by term or by randomness.",
    backend: "JavaScript, jQuery, Wikipedia API",
    frontend: "HTML5, CSS3, React.js, Responsive",
    productPaper:
      "Recently redone with React Hooks. Also taught myself about using APIs with React and more about state management with this project.",
    codeLink: "https://github.com/CrumrineCoder/wikipediaviewerreact",
    websiteLink: "http://dark-yarn.surge.sh/",
    freeCodeCampLink:
      "https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer",
    video: wikipediaVideo,
    class: "Wiki",
  },
  {
    logo: calculatorLogo,
    color: "#865DAF",
    picture: " Images/calculatorApp.png ",
    projectName: "Calculator",
    shortDesc: "This is a web app that resembles a basic calculator.",
    backend: "JavaScript",
    frontend: "HTML5, CSS3, Responsive",
    productPaper:
      "I practiced JavaScript algorithm scripting with this project.",
    codeLink: "https://github.com/CrumrineCoder/Calculator",
    websiteLink: " https://crumrinecoder.github.io/Calculator/",
    freeCodeCampLink:
      "https://www.freecodecamp.org/challenges/build-a-javascript-calculator",
    video: calculatorVideo,
    class: "Calc",
  },
  {
    logo: pomodoroLogo,
    color: "#E90000",
    picture: " Images/pomodoroApp.png ",
    projectName: "Pomodoro",
    shortDesc:
      "This is a web app that acts as a minimalist Pomodoro (time management) clock with options.",
    backend: "JavaScript, jQuery",
    frontend: "HTML5, CSS3, Responsive",
    productPaper:
      "I practiced Async JavaScript design and minimalistic front end design.",
    codeLink: "https://github.com/CrumrineCoder/Pomodoro-Version-2",
    websiteLink: "https://crumrinecoder.github.io/Pomodoro-Version-2/",
    freeCodeCampLink:
      "https://www.freecodecamp.org/challenges/build-a-pomodoro-clock",
    video: pomodoroVideo,
    class: "Clock",
  },
];

let recommendations = [
  {
    name: "Robert Tolmach",
    text:
      "<p>Nic has been fantastic to work with while interning with our nonprofit, https://ChangingThePresent.org. I am glad to recommend him.</p><p>His knowledge, analytical skills, ability to teach himself new skills, creativity, work ethic, and productivity are all impressive. He is also enthusiastic, eager to learn, and likable. Everyone here—management, staff, and other interns—loved working with him.</p>",
    role: "Co-Founder",
    company: "Changing The Present",
    image: robertPFP,
  },
  {
    name: "Sean D. Mack",
    text:
      "<p>Nicolas was an amazing addition to the intern program here at xOps.</p> <p>Nic developed front end interface based on mock-ups provided for our open source monitoring tools. He met with our worldwide team for daily standups and biweekly sprints to continue designing mockups after he finished building from the ones provided.</p> <p> During our chats, he was always thoughtful of the business, user, and the development team’s pain points, but was never paralyzed in his decision making. He has an eye for UI design along with an inclination to research and understand the user. He is able to discover pain points and begin developing solutions for them, and is always more than happy to communicate when he needs help. </p> <p> Nic is a talented designer and front-end programmer and I am happy to recommend him for any position he might apply. </p>",
    role: "CEO/CTO and Principal Consultant",
    company: "xOps",
    image: seanPFP
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    console.log(selectedProject);
    console.log(projectData[selectedProject]?.class);
  }, [selectedProject]);

  return (
    <div className="App">
      <Header />
      <div className="landingVideoContainer">
        <video
          className="landingVideo"
          autoPlay
          muted={true}
          loop
          src={
            selectedProject === 0
              ? projectData[0]?.video
              : (selectedProject && projectData[selectedProject]?.video) ||
                baseVideo
          }
        />
      </div>
      <ProjectInfo
        selectedProject={selectedProject}
        noProjectSelected={selectedProject === null}
        projectData={projectData}
      ></ProjectInfo>
      <div className="landingBottomContainer">
        <ProjectBoxesContainer
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          projectData={projectData}
          noProjectSelected={selectedProject === null}
        />
      </div>
      <div className="recommendationSectionContainer">
        {recommendations.map((recommendation, index) => (
          <Recommendation
            key={index}
            name={recommendation.name}
            text={recommendation.text}
            company={recommendation.company}
            role={recommendation.role}
            image={recommendation.image}
            selectedProject={selectedProject}
            noProjectSelected={selectedProject === null}
            colour={projectData[selectedProject].class}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

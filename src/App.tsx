import "./App.scss";

import React from "react";
import Header from "./components/header";

import NPC from "./assets/videos/NPC.mp4";

function App() {
  return (
    <div className="App">
      <Header />
      <video src={NPC} autoPlay loop muted />
    </div>
  );
}

export default App;

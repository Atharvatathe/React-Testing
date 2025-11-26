import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skill/Skills";

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={["HTML", "CSS"]} />
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skill/Skills";
import { Counter } from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={["HTML", "CSS"]} /> */}
      <Counter />
    </div>
  );
}

export default App;

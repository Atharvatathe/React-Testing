import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skill/Skills";
import { Counter } from "./components/counter/Counter";
import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={["HTML", "CSS"]} /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;

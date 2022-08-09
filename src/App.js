import React from "react";
import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="freedom" />
      </main>
      <footer>
        <p className="text mt-5">
          <em>
            This website was coded by{" "}
            <a
              href="https://startling-beijinho-552315.netlify.app/about.html"
              target="_blank"
              rel="noreferrer"
              title="about me"
            >
              Tina Semashko
            </a>
            , and is{" "}
            <a
              href="https://github.com/TinaSemashko/dictionary_react"
              target="_blank"
              rel="noreferrer"
              title="github link that project"
            >
              open-sourced on GitHub{" "}
            </a>
            and{" "}
            <a href="https://effortless-sunburst-a3a68f.netlify.app/">
              hosted on Netlify
            </a>
          </em>
        </p>
      </footer>
    </div>
  );
}

export default App;

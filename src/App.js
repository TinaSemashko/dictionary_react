import React from "react";
import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Dictionary />
      </body>
      <footer>
        <p class="text-center mt-5">
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
            and <a href="">hosted on Netlify</a>
          </em>
        </p>
      </footer>
    </div>
  );
}

export default App;

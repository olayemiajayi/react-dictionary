import React from "react";
import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <Dictionary />
        <footer>
          Coded by Yetunde Ajayi and it is open source on{" "}
          <a
            href="https://github.com/olayemiajayi/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

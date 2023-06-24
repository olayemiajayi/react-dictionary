import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h3>{props.results.phonetic}</h3>
        <a
          rel="noreferrer"
          href={props.results.phonetics[0].audio}
          target="_blank"
        >
          Listen
        </a>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

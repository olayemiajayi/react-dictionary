import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definitions:</strong>
      <p>{props.meaning.definitions[0].definition}</p>
      <strong>Example:</strong>
      <p>{props.meaning.definitions[0].example}</p>

      <p>
        {" "}
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}

import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        <p>{props.meaning.definitions[0].definition}</p>
      </div>
      <div className="Meaining-p">
        <p>{props.meaning.definitions[0].example}</p>
      </div>

      <p>
        {" "}
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}

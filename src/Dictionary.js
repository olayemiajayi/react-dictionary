import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [Keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${Keyword}`);
  }

  function handleWordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
      </form>
    </div>
  );
}

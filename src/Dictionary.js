import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function showDictonaryInfo(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showDictonaryInfo);
  }

  function updateWord(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div class="container">
      <form className="form" onSubmit={handleSubmit}>
        <div class="input-group">
          <input
            type="search"
            className="form-control "
            placeholder="Enter a word.."
            autoFocus="on"
            onChange={updateWord}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}

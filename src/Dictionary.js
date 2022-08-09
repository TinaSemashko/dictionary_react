import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [ready, setReady] = useState(false);
  let [photos, setPhotos] = useState(null);

  function showDictonaryInfo(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showDictonaryInfo);

    let pexelsApiKey =
      "563492ad6f917000010000013871c7fbb6a142d89b4cb4c608ec6c0b";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateWord(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setReady(true);
    search();
  }

  if (ready) {
    return (
      <div className="Dictionary">
        <section>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control "
                placeholder="Enter a word.."
                autoFocus="on"
                onChange={updateWord}
                defaultValue={props.defaultKeyword}
              />
              <input type="submit" value="Search" className="btn btn-danger" />
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

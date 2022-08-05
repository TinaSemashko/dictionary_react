import React, { useState, useEffect } from "react";
//import ForecastForDay from "./ForecastForDay";

import "./Dictionary.css";

export default function Dictionary(props) {
  function handleSubmit() {}

  function updateCity() {}

  return (
    <div class="container">
      <form className="form" onSubmit={handleSubmit}>
        <div class="input-group">
          <input
            type="search"
            className="form-control "
            placeholder="Enter a word.."
            autoFocus="on"
            onChange={updateCity}
          />

          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

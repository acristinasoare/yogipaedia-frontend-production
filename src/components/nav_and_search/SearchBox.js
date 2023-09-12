// free text search box which queries the Pose.js and Flow.js data and returns any matches
// Includes a submit button

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../styles/search-box.scss";

const SearchBox = () => {
  return (
    <form>
      <input type="text" placeholder="Search here..." />
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchBox;

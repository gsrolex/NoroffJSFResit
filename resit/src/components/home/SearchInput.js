import React, { useState, useEffect } from "react";

export default function Search({ onSearchCallback }) {
  const [value, setValue] = useState("");

  function inputChange(event) {
    setValue(event.target.value);
  }

  useEffect(
    function () {
      onSearchCallback(value);
    },
    [value]
  );

  return (
    <>
      <div className="dropdownContainerInput">
        <input
          className="dropdownContainer dropdownSearch"
          type="text"
          placeholder="Search Pokemon"
          onChange={inputChange}
        />
      </div>
    </>
  );
}

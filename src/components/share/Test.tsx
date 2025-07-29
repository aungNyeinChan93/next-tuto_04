"use client";
import React, { useState } from "react";

const Test = () => {
  const [name, setName] = useState("chan");

  const clickhandler = () => {
    setName("koko");
  };

  return (
    <React.Fragment>
      <main>
        {name}
        <button type="button" onClick={clickhandler}>
          change
        </button>
      </main>
    </React.Fragment>
  );
};

export default Test;

"use client";

import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "@/contexts/ThemeProvider";

const ThemeComponent = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <ThemeProvider>
      <main>
        {theme}
        <button type="button" onClick={() => changeTheme()}>
          Change Theme
        </button>
      </main>
    </ThemeProvider>
  );
};

export default ThemeComponent;

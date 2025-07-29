"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  changeTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const changeTheme = () => {
    setTheme((prev: Theme) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);

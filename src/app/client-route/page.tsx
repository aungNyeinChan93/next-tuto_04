"use client";

// import { serverProcess } from "@/utils/serverUtils";
import React from "react";
import { useTheme } from "@/contexts/ThemeProvider";

const ClientRoute = () => {
  //   const res = serverProcess();
  const { theme, changeTheme } = useTheme();
  return (
    <React.Fragment>
      <main
        className={`w-full h-screen ${
          theme === "dark"
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-black"
        }`}
      >
        Client Routes {theme}
        <button type="button" onClick={() => changeTheme()}>
          Change Theme
        </button>
      </main>
    </React.Fragment>
  );
};

export default ClientRoute;

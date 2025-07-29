import React from "react";
import { serverProcess } from "@/utils/serverUtils";
const ServerRoute = async () => {
  const result = serverProcess();
  return (
    <React.Fragment>
      <main>Server Route! {result}</main>
    </React.Fragment>
  );
};

export default ServerRoute;

import React from "react";
import { serverProcess } from "@/utils/serverUtils";

const ServerRoute = () => {
  const result = serverProcess();
  return <main>Server Route! {result}</main>;
};

export default ServerRoute;

import React from "react";
import { serverProcess } from "@/utils/serverUtils";
// import { clientOnlyCode } from "@/utils/client-utils";

const ServerRoute = async () => {
  const result = serverProcess();
  // const cli_res = (await clientOnlyCode()) as string;
  return (
    <main>
      Server Route! {result}
      {/* <p>{cli_res}</p> */}
    </main>
  );
};

export default ServerRoute;

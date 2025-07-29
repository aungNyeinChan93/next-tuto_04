import "client-only";

export const clientOnlyCode = () => {
  console.log("client only");
  return new Promise((resolve) => {
    resolve("client only");
  });
};

import React from "react";

const TestProduct = async () => {
  await new Promise((reslove) => setTimeout(reslove, 3000));
  return (
    <React.Fragment>
      <main>Product Lists</main>
    </React.Fragment>
  );
};

export default TestProduct;

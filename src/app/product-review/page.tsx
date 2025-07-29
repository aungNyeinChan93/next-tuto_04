import React, { Suspense } from "react";
import TestProduct from "@/components/share/TestProduct";

const ProductReview = async () => {
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={"Product loading . . ."}>
          <TestProduct />
          <TestProduct />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default ProductReview;

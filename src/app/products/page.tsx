import Link from "next/link";
import React from "react";

const Products = async () => {
  return (
    <React.Fragment>
      <main>
        <Link href={"/products/1"}>product 1</Link>
        <Link href={"/products/2"}>product 2</Link>
        <Link href={"/products/3"}>product 3</Link>
      </main>
    </React.Fragment>
  );
};

export default Products;

import React from "react";

export const dynamicParams = false;

interface DetailProductProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

const DetailPorduct: React.FC<DetailProductProps> = async ({ params }) => {
  const { id } = await params;
  return (
    <React.Fragment>
      <main>Prouct - {id}</main>
    </React.Fragment>
  );
};

export default DetailPorduct;

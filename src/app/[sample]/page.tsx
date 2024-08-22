import React from "react";

function page({ params }: { params: { sample: string } }) {
  return <div>{params.sample}</div>;
}

export default page;

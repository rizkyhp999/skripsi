import React from "react";

interface data {
  tulisan: string;
}

export default function carousel({ tulisan }: data) {
  return <div>{tulisan}</div>;
}

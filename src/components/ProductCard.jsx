import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <b>{product.price}</b>
    </div>
  );
};

import { useContext } from "react";
import { ProductStateContext } from "../App";
import { ProductCard } from "./ProductCard";
import "./ProductPage.css";

export const ProductPage = () => {
  const productState = useContext(ProductStateContext);

  return (
    <div>
      {productState.selectedProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

import { createContext, useEffect, useState, useReducer } from "react";
import {
  reducer as productReducer,
  initialState as initialProductState,
  setProducts,
} from "./state/products";
import {
  reducer as cartReducer,
  initialState as initialCartState,
} from "./state/cart";
import { ProductPage } from "./components/ProductPage";
import Filter from "./components/Filter";
import CartButton from "./components/CartButton";

export const ProductStateContext = createContext(initialProductState);
export const ProductDispatchContext = createContext();
export const CartStateContext = createContext(initialCartState);
export const CartDispatchContext = createContext();
export const FetchingContext = createContext(false);

const App = () => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const menFetch = fetch(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    ).then((res) => res.json());
    const womenFetch = fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    ).then((res) => res.json());

    Promise.all([menFetch, womenFetch]).then((fetches) =>
      productDispatch(setProducts([...fetches[0], ...fetches[1]]))
    );
  }, [productDispatch]);

  return (
    <CartDispatchContext.Provider value={cartDispatch}>
      <CartStateContext.Provider value={cartState}>
        <FetchingContext.Provider value={isFetching}>
          <ProductDispatchContext.Provider value={productDispatch}>
            <ProductStateContext.Provider value={productState}>
              <h1>Sistem Pembelian Pakaian Online</h1>
              <CartButton />
              <Filter />
              <ProductPage />
            </ProductStateContext.Provider>
          </ProductDispatchContext.Provider>
        </FetchingContext.Provider>
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default App;

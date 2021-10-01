import { useState, useContext, useEffect } from "react";
import { ProductDispatchContext } from "../App";
import { changeCategory, sortProducts } from "../state/products";

const Filter = () => {
  const [category, setCategory] = useState(0);
  const [sort, setSort] = useState(0);
  const productDispatch = useContext(ProductDispatchContext);

  const handleChangeSort = (e) => setSort(e.target.value);
  const handleChangeCategory = (e) => setCategory(e.target.value);

  useEffect(() => {
    productDispatch(changeCategory(category));
    productDispatch(sortProducts(sort));
  }, [category, sort, productDispatch]);

  return (
    <div>
      Filter
      <div>
        <select onChange={handleChangeSort}>
          <option value={0}>Nama (ASC)</option>
          <option value={1}>Nama (DESC)</option>
          <option value={2}>Harga (ASC)</option>
          <option value={3}>Harga (DESC)</option>
        </select>
        <select onChange={handleChangeCategory}>
          <option value={0}>Semua</option>
          <option value={1}>Pria</option>
          <option value={2}>Wanita</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

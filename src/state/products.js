// State
export const initialState = {
  products: [],
  selectedProducts: [],
};

// Reducer
export const reducer = (state, action) => {
  console.log("reducer! : ", action);
  switch (action.type) {
    case "setProducts":
      return {
        ...state,
        products: action.payload,
        selectedProducts: action.payload,
      };
    case "changeCategory":
      return {
        ...state,
        selectedProducts:
          action.payload === null
            ? state.products
            : state.products.filter((e) => e.category === action.payload),
      };
    case "sortProducts":
      const sorter = (a, b) => {
        if (a[action.payload.sortBy] < b[action.payload.sortBy])
          return action.payload.order === "asc" ? -1 : 1;
        if (a[action.payload.sortBy] > b[action.payload.sortBy])
          return action.payload.order === "asc" ? 1 : -1;
        return 0;
      };

      return {
        ...state,
        selectedProducts: state.selectedProducts.sort(sorter),
      };
    default:
      return state;
  }
};

// Action
export const setProducts = (newProducts) => {
  return {
    type: "setProducts",
    payload: newProducts,
  };
};

// category = 0 : any, 1 : men, 2 : women
export const changeCategory = (category) => {
  const categoryString = (() => {
    switch (Number(category)) {
      case 0:
        return null;
      case 1:
        return "men's clothing";
      case 2:
        return "women's clothing";
      default:
        return null;
    }
  })();
  return {
    type: "changeCategory",
    payload: categoryString,
  };
};

export const sortProducts = (sortOption) => {
  const sort = Number(sortOption);
  return {
    type: "sortProducts",
    payload: {
      sortBy: sort < 2 ? "title" : "price",
      order: sort === 0 || sort === 2 ? "asc" : "desc",
    },
  };
};

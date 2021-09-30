//Utility
const clamp = (num) => {
  return Math.min(Math.max(num, 0), 100);
};

// State
export const initialState = {
  items: {},
};

// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.product.id]: {
            ...action.payload.product,
            amount: clamp(
              state.items[action.payload.product.id].amount +
                action.payload.amount
            ),
          },
        },
      };
    case "removeItem":
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.product.id]: {
            ...action.payload.product,
            amount: clamp(
              state.items[action.payload.product.id].amount -
                action.payload.amount
            ),
          },
        },
      };
    default:
      return state;
  }
};

// Action
export const addItem = (product, amount) => {
  return {
    type: "addItem",
    payload: {
      product,
      amount,
    },
  };
};

export const removeItem = (product, amount) => {
  return {
    type: "removeItem",
    payload: {
      product,
      amount,
    },
  };
};

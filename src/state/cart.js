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
  let prevAmount;
  try {
    prevAmount = state.items[action.payload.product.id].amount;
  } catch {
    prevAmount = 0;
  }

  switch (action.type) {
    case "addItem":
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.product.id]: {
            ...action.payload.product,
            amount: clamp(prevAmount + 1),
          },
        },
      };
    case "removeItem":
      const amount = clamp(prevAmount - 1);
      let nextState = {
        ...state,
        items: {
          ...state.items,
          [action.payload.product.id]: {
            ...action.payload.product,
            amount,
          },
        },
      };
      if (amount <= 0) {
        delete nextState.items[action.payload.product.id];
      }
      return nextState;
    default:
      return state;
  }
};

// Action
export const addItem = (product) => {
  return {
    type: "addItem",
    payload: {
      product,
    },
  };
};

export const removeItem = (product) => {
  return {
    type: "removeItem",
    payload: {
      product,
    },
  };
};

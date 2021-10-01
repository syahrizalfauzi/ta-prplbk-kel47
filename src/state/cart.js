//Utility
const clamp = (num) => {
  return Math.min(Math.max(num, 0), 100);
};

// State
export const initialState = {
  step: 0,
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

  console.log(action);

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
    case "showCart":
      return {
        ...state,
        step: 1,
      };
    case "showPayment":
      return {
        ...state,
        step: 2,
      };
    case "closeModal":
      return {
        ...state,
        step: 0,
      };
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

export const showModal = (isCartModal) => {
  return {
    type: isCartModal ? "showCart" : "showPayment",
  };
};

export const closeModal = () => {
  return {
    type: "closeModal",
  };
};

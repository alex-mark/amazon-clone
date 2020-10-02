export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: [
          ...state.basket.slice(0, action.index),
          ...state.basket.slice(action.index + 1),
        ],
      };

    default:
      return state;
  }
};

export default reducer;

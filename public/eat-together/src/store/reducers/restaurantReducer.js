const initState = {
  restaurantID: null,
  cart: null,
  items: []
};

const restaurantReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_RESTAURANT_ID":
      console.log(action.id);
      return {
        ...state,
        restaurantID: action.id
      };
    default:
      return state;
  }
};

export default restaurantReducer;

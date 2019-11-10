export const addRestaurantID = id => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_RESTAURANT_ID", id });
  };
};

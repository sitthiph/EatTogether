import React from "react";

const Item = ({ item, addToCart }) => {
  return (
    <>
      <p>
        {item.name} - {item.basePrice}
      </p>
      <p>{item.description}</p>
      <button onClick={() => addToCart(item)}>add</button>
    </>
  );
};

export default Item;

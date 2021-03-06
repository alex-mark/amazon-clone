import React, { forwardRef } from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

const BasketItem = ({ item, index, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const { image, title, price, rating } = item;

  // console.log("this is the basket", basket);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      index,
    });
  };

  return (
    <div className="basketItem">
      <img src={image} alt={title} />

      <div className="basketItem__info">
        <p className="basketItem__title">{title}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
        {!hideButton && (
          <button className="basketItem__button" onClick={removeFromBasket}>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default BasketItem;

import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [itemRemoved, setItemRemoved] = useState(false);

  const toggleItemRemoved = () => setItemRemoved((prevState) => !prevState);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          <Flipper flipKey={basket.length}>
            {console.log(basket.length)}
            {basket.map((item, index) => (
              <Flipped key={item.id} flipId={item.id}>
                <BasketItem
                  key={item.id}
                  item={item}
                  index={index}
                  // onRemove={toggleItemRemoved}
                />
              </Flipped>
            ))}
          </Flipper>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

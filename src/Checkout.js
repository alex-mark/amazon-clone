import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

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
          {/* <BasketItem
            index="1"
            item={{
              title:
                "The Lean Startup: How Constant Innovation Creates Radically Successful businesses Paperback",
              price: 11.96,
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
              rating: 5,
            }}
          />
          <BasketItem
            index="1"
            item={{
              title:
                "The Lean Startup: How Constant Innovation Creates Radically Successful businesses Paperback",
              price: 11.96,
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
              rating: 5,
            }}
          /> */}
          {basket.map((item, index) => (
            <BasketItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import "./Order.css";
import BasketItem from "./BasketItem";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, index) => (
        <BasketItem item={item} index={index} hideButton />
      ))}

      <CurrencyFormat
        renderText={(value) => <h3>Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;

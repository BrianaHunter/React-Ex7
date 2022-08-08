import React from "react";
import { useContext } from "react";
import OrderContext from "../context/OrderContext";

export default function Header() {
  const { order, addItem, removeItem } = useContext(OrderContext);
  return (
    <div>
      <div>{order.length}</div>
    </div>
  );
}

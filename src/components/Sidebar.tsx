import React from "react";
import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  const { order, addItem, removeItem } = useContext(OrderContext);
  return (
    <div>
      {order.map((item) => (
        <div>
          {item.name} - {item.price}
        </div>
      ))}
    </div>
  );
}

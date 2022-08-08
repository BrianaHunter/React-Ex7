import React from "react";
import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../Item";

interface MenuItemProp {
  item: Item;
}

export default function MenuItem({ item }: MenuItemProp) {
  const { order, addItem, removeItem } = useContext(OrderContext);

  return (
    <div>
      <div>
        <ol>
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.calories}</div>
            <div>{item.price}</div>
            <div>{item.vegetarian}</div>
          </li>
        </ol>
      </div>
      <button onClick={() => addItem(item)}>Add Item</button>
      <button onClick={() => removeItem(item.id)}>Remove Item</button>
    </div>
  );
}

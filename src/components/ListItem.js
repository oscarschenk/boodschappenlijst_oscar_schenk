import React from "react";

function ListItem(props) {
  return (
    <li
      value={props.item.title}
      className="list-item"
      onClick={props.passedFunction}
      id={props.item.id}
      quantity={props.item.quantity}
    >
      {props.item.title}
      {props.item.quantity > 1 ? <p> x {props.item.quantity}</p> : null}
    </li>
  );
}

export default ListItem;

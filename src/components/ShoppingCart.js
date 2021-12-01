import React from "react";
import ListItem from "./ListItem";

function ShoppingCart(props) {
  const shoppingCartList = props.item.map((item) => (
    <ListItem key={item.id} item={item} quantity={item.quantity} />
  ));
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <button onClick={props.emptyCart}>Empty Shopping Cart</button>
      <ul className="shopping-cart-ul allround-ul">{shoppingCartList}</ul>
    </div>
  );
}

export default ShoppingCart;

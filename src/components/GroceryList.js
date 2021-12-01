import React from "react";
import ListItem from "./ListItem";

function GroceryList(props) {
  const groceryList = props.item.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      quantity={item.quantity}
      passedFunction={props.passedFunction}
    />
  ));
  return (
    <div className="grocery-list">
      <h1>Grocery List</h1>
      <div className="grocery-list-inputs">
        <input
          type="text"
          value={props.textAreaState}
          placeholder="Add Items"
          onChange={props.handleChange}
        />
        <button onClick={props.addItemToGroceryList}>Add</button>
        <button onClick={props.emptyGroceryList}>Empty Grocery List</button>
      </div>
      <ul className="grocery-ul allround-ul">{groceryList}</ul>
    </div>
  );
}

export default GroceryList;

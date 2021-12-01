import React from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [],
      shoppingListItems: [],
      newShoppingItemTextArea: "",
    };
    this.itemClick = this.itemClick.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.addItemToGroceryList = this.addItemToGroceryList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.emptyGroceryList = this.emptyGroceryList.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      newShoppingItemTextArea: value,
    });
  }

  addItemToGroceryList(event) {
    console.log(event.target.value);
    const title = this.state.newShoppingItemTextArea;
    const uniqueId = this.state.groceryItems.length + 1;
    const newGroceryListItem = { id: uniqueId, title: title, quantity: 1 };
    this.setState((prevState) => {
      return {
        groceryItems: [...prevState.groceryItems, newGroceryListItem],
        newShoppingItemTextArea: "",
      };
    });
  }

  emptyGroceryList() {
    this.setState({ groceryItems: [] });
  }

  emptyCart() {
    this.setState({ shoppingListItems: [] });
  }

  itemClick(event) {
    const id = parseInt(event.target.id, 10);
    const title = event.target.getAttribute("value");
    const quantity = parseInt(event.target.getAttribute("quantity"), 10);
    const shoppingCartItem = { id: id, title: title, quantity: quantity }; // this is an object, all relevant strings converted to numbers
    const currentShoppingCart = this.state.shoppingListItems; // this is an array of objects

    if (
      currentShoppingCart.some((item) => item.title === shoppingCartItem.title)
    ) {
      const indexOfItem = currentShoppingCart.findIndex((item) => {
        return item.id === id;
      });
      let itemsInShoppingCart = [...this.state.shoppingListItems];
      let itemToUpdate = { ...itemsInShoppingCart[indexOfItem] };
      itemToUpdate.quantity = itemToUpdate.quantity + 1;
      itemsInShoppingCart[indexOfItem] = itemToUpdate;
      this.setState({ shoppingListItems: itemsInShoppingCart });
    } else {
      this.setState((prevState) => {
        return {
          shoppingListItems: [...prevState.shoppingListItems, shoppingCartItem],
        };
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Shoppinator 3000</h1>
        </div>
        <div className="content">
          <GroceryList
            textAreaState={this.state.newShoppingItemTextArea}
            item={this.state.groceryItems}
            passedFunction={this.itemClick}
            addItemToGroceryList={this.addItemToGroceryList}
            emptyGroceryList={this.emptyGroceryList}
            handleChange={this.handleChange}
          />
          <ShoppingCart
            item={this.state.shoppingListItems}
            emptyCart={this.emptyCart}
          />
        </div>
      </div>
    );
  }
}

export default Container;

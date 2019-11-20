import React from "react";
//importing just one of the methods from react-dom i.e. the {render} method
import { render } from "react-dom";
// import the getFunName function from helpers
import { getFunName } from "../helpers";

// this is a component & it needs at least one render() method
class StorePicker extends React.Component {
  // preventDefault i.e. to stop the form from submitting & the page from refreshing
  goToStore(event) {
    event.preventDefault();
    console.log("You changed the URL");
    //first grab text from the box
    //transition from / to /store/:storeId
  }

  //within the render we return some JSX
  render() {
    // return <p>Hello!</p>;
    return (
      // render methods are bound to the actual class you are in so you can use the "this" keyword and it will refer to the actual component i.e. the StorePicker class
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        {/* set the getFunName() function as the defaultValue of the input*/}
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        ></input>
        <button type="submit">Visit Store &#8594;</button>
      </form>
    );
  }
}

export default StorePicker;

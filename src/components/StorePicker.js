import React from "react";
//importing just one of the methods from react-dom i.e. the {render} method
import { render } from "react-dom";
// import the getFunName function from helpers
import { getFunName } from "../helpers";

import { PropTypes } from "prop-types";

// this is a component & it needs at least one render() method
class StorePicker extends React.Component {
  //create a method but it's OUTSIDE of the render(). Note: cannot use the "this" keyword outside of the render because it will NOT refer to the StorePicker component. Your methods are not BOUND to the class component, so you can use the constructor component instead (per example below) but we won't use it this time
  // constructor() {
  //   // super() runs the React.Component first (i.e. render() all that stuff etc.) then do whatever StorePicker does, which is the methods within, i.e. goToStore()
  //   super();
  //   // looks for goToStore() method, then binds it to (this) which refers to StorePicker i.e. the class component. So need to do this for ALL methods within a class component
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // preventDefault i.e. to stop the form from submitting & the page from refreshing
  goToStore(event) {
    event.preventDefault();
    console.log("You changed the URL");
    //first grab text from the box.
    console.log(this.storeInput.value);
    const storeId = this.storeInput.value;
    //transition from / to /store/:storeId --> using React Router, which needs to be passed by the parent all the way down
    //this won't work because transitionTo is no longer a function. Fuck.
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  //within the render we return some JSX
  render() {
    // return <p>Hello!</p>;
    return (
      // render methods are bound to the actual class you are in so you can use the "this" keyword and it will refer to the actual component i.e. the StorePicker class
      // this.goToStore.bind(this) does the same thing as the constructor stuper method above i.e. looks for the goToStore() method and binds it to "this" which refers to the class component
      //or we can do it as a function like e = this.goToStore(e)
      <form className="store-selector" onSubmit={e => this.goToStore(e)}>
        <h2>Please Enter a Store</h2>
        {/* set the getFunName() function as the defaultValue of the input*/}
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => {
            this.storeInput = input;
          }}
        ></input>
        <button type="submit">Visit Store &#8594;</button>
      </form>
    );
  }
}

StorePicker.contextType = {
  router: React.PropTypes.object
};

export default StorePicker;

import React from "react";
//importing just one of the methods from react-dom i.e. the {render} method
import { render } from "react-dom";

// this is a component & it needs at least one render() method
class StorePicker extends React.Component {
  //within the render we return some JSX
  render() {
    return <p>Hello!</p>;
  }
}

export default StorePicker;

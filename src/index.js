// let's go!
import React from "react";
//importing just one of the methods from react-dom i.e. the {render} method
import { render } from "react-dom";
//import the component from the components folder
import StorePicker from "./components/StorePicker";

//render the component inside of #main
render(<StorePicker />, document.querySelector("#main"));

// let's go!
import React from "react";
//importing just one of the methods from react-dom i.e. the {render} method
import { render } from "react-dom";
//import the entire css file
import "./css/style.css";
//import App Component
import App from "./components/App";
//import the component from the components folder
import StorePicker from "./components/StorePicker";

//render the component inside of #main
// remove the StorePicker and just render App component
render(<App />, document.querySelector("#main"));

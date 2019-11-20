// let's go!
import React from "react";
//importing just one of the methods from react-dom i.e. the {render} method
import { render } from "react-dom";
//import the entire css file
import "./css/style.css";
//import from react-router
import { BrowserRouter, Match, Miss } from "react-router";
//import App Component
import App from "./components/App";
//import the component from the components folder
import StorePicker from "./components/StorePicker";

import NotFound from "./components/NotFound";

//create stateless functional component
const Root = () => {
  return (
    <BrowserRouter>
      {/* Match cannot be a direct child of BrowserRouter so need to wrap in a <div> first */}
      <div>
        {/* If the URL matches EXACTLY then render StorePicker component */}
        <Match exactly pattern="/" component={StorePicker}></Match>
        {/* If the url pattern looks like this then render App component */}
        <Match pattern="/store/:storeId" component={App}></Match>
        {/* If the url misses any of the above then render the NotFound component */}
        <Miss component={NotFound}></Miss>
      </div>
    </BrowserRouter>
  );
};

//render the component inside of #main
// remove the StorePicker and just render App component
// remove the App and render Root instead since Root renders App component
render(<Root />, document.querySelector("#main"));

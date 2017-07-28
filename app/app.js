// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Main Component
var Main = require("./components/Main");

console.log("hello");
// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Main />, document.getElementById("app"));

console.log("afterwards");
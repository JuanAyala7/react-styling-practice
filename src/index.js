import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let time = date.getHours();

let greetings;

let customColor = {
  color: ""
};

if (time > 0 && time <= 12) {
  greetings = "Good Morning";
  customColor.color = "red";
} else if (time > 12 && time <= 18) {
  greetings = "Good Afternoon";
  customColor.color = "green";
} else {
  greetings = "Good Evening";
  customColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customColor}>
    {greetings}
  </h1>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let time = date.getHours();

let greetings;

let customeColor = {
  color: ""
};

if (time > 0 && time <= 12) {
  greetings = "Good Morning";
  customeColor.color = "red";
} else if (time > 12 && time <= 18) {
  greetings = "Good Afternoon";
  customeColor.color = "green";
} else {
  greetings = "Good Evening";
  customeColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customeColor}>
    {greetings}
  </h1>,
  document.getElementById("root")
);

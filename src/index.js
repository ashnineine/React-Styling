import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentHour = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentHour < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentHour < 18) {
  customStyle.color = "green";
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

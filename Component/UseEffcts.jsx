import React, { useEffect, useState } from "react";
import "./Component.css";
var Value = 0;
function HooksComponent() {
  //   const [color, setColor] = useState("green");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (Value > 0) {
        console.log("Count start");
        setCount(() => count + Value);
      } else {
        console.log("Reset");
        setCount(() => 0);
      }
    }, 1000);
  });

  return (
    <>
      <div className="container">
        <div className="styl">
          {/* <div>My Color is {color} </div> */}
          {/* <button className="btn btn-secondary" onClick={() => setColor("red")}> */}
          <div>Count is {count} </div>
          <button
            className="btn btn-secondary m-4 p-4"
            onClick={() => setCount(() => (Value = count + 1))}
          >
            Start
          </button>
          <button
            className="btn btn-secondary m-4 p-4"
            onClick={() => setCount(() => (Value = 0))}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default HooksComponent;

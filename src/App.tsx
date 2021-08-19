import React from "react";
import "App.css";

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="container">
      <div className="textbox">this is text box</div>
      <div className="inputbox">
        <input />
        <button onClick={() => console.log("hello world")}> send </button>
      </div>
    </div>
  );
}

export default App;

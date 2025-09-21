import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import "./index.css";

function App() {
  return (
    <div className=" w-full h-full ">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import Score from "../components/Score/Score.js";
import Settings from "../components/Settings/Settings.js";
import Letters from "../components/Letters/Letters.js";
import DataContext from  "../DataContext/DataContext.js";

function App() {
  return (

    <div className="">
    <div className="glavniPrikaz">

    <div className="settings">
      <Settings />
    </div>
    </div>
   <div className="letters">
   <Letters />
   </div>

    </div>


  );
}

export default App;

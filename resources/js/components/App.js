import React from "react";
import ReactDOM from "react-dom";
import Score from "../components/Score/Score.js";
import Settings from "../components/Settings/Settings.js";
import Letters from "../components/Letters/Letters.js";
import DataContext from  "../DataContext/DataContext.js";

function App() {
  return (
  <DataContext.Provider>
    <div className="">
    <div className="glavniPrikaz">

    <div className="settings">
      <Settings />
    </div>
    <div className="score">
      <Score />
    </div>
    </div>
   // <div className="letters">
   // <Letters />
   // </div>

    </div>

</DataContext.Provider>
  );
}

export default App;

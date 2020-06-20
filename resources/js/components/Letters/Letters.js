import React, { useState,useContext } from "react";
import DataContext from  "../../DataContext/DataContext.js";


const Letters = () => {



  const [letters, setLetters] = useState([
    { id: 1, letter: "A", color: "" },
    { id: 2, letter: "B", color: "" },
    { id: 3, letter: "C", color: "" },
    { id: 4, letter: "D", color: "" },
    { id: 5, letter: "E", color: "" },
    { id: 6, letter: "F", color: "" },
    { id: 7, letter: "G", color: "" },
    { id: 8, letter: "H", color: "" },
    { id: 9, letter: "I", color: "" },
    { id: 10, letter: "J", color: "" },
    { id: 11, letter: "K", color: "" },
    { id: 12, letter: "L", color: "" },
    { id: 13, letter: "M", color: "" },
    { id: 14, letter: "N", color: "" },
    { id: 15, letter: "O", color: "" },
    { id: 16, letter: "P", color: "" },
    { id: 17, letter: "Q", color: "" },
    { id: 18, letter: "R", color: "" },
    { id: 19, letter: "S", color: "" },
    { id: 20, letter: "T", color: "" },
    { id: 21, letter: "U", color: "" },
    { id: 22, letter: "V", color: "" },
    { id: 23, letter: "W", color: "" },
    { id: 24, letter: "X", color: "" },
    { id: 25, letter: "Y", color: "" },
    { id: 26, letter: "Z", color: "" }
  ]);






  const glavniPrikaz = letters.map(item => (
    <div key={item.id} className="pojedinacanBroj">{`${item.letter} (${item.id})`}</div>
  ));

  return glavniPrikaz;
};

export default Letters;

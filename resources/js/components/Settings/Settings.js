import React, { useState,useEffect,useReducer } from "react";
import Score from "../../components/Score/Score.js";

function reducer (state,action){

switch (action.type) {
  case "reset":
      return state;

    break;
  default:
     return state

}


}

const Settings = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [started, setStarted] = useState(false);
  const [letter, setLetter] = useState("");
  const [randomNumber,setRandomNumber]=useState(null);
  const [brojPogodjenih,setBrojPogodjenih]=useState([]);
  const [brojPromasenih,setBrojPromasenih]=useState(0);
  const [izabranaVrednost, setIzabranaVrednost] = useState([]);
  const [emptyState,dispatch]=useReducer(reducer,0);

  const dugme = started ? "Stop Game" : "Start Game";
  const [nizVrednosti,setNizVrednosti]=useState([
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
  ])
  const handleButton = () => {

    setStarted(!started);
    if (started === true) {
    console.log('NijePocela')
    } else {
        console.log("Pocela je")

        let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
        // startGame(numbers);
        if (difficulty === "easy") {
           setRandomNumber(Math.floor(Math.random() * numbers.length+1));
        } else if (difficulty === "medium") {
           setRandomNumber(Math.floor(Math.random() * numbers.length+1));
        } else if (difficulty === "hard") {
           setRandomNumber(Math.floor(Math.random() * numbers.length+1));
        }

        console.log(nizVrednosti);

    }
   }

   const handleInputChange = event => {
    setLetter(event.target.value);

  };


 useEffect(()=>{

  console.log(letter);
  console.log(randomNumber);

   const noviNiz=nizVrednosti.filter(item=>(

     letter==item.letter && randomNumber==item.id
   ))
   if(noviNiz!=0){
   setBrojPogodjenih(brojPogodjenih.concat(noviNiz));

 }
},[letter])





  const radioButtonDisabled = started ? true : false;

  return (
    <div>
      <div className="radioFields">
        <div className="radio">
          <label>
            <input
              type="radio"
              value="easy"
              checked={difficulty === "easy"}
              onChange={() => setDifficulty("easy")}
              disabled={radioButtonDisabled}
            />
            Easy
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="easy"
              checked={difficulty === "medium"}
              onChange={() => setDifficulty("medium")}
              disabled={radioButtonDisabled}
            />
            Medium
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="hard"
              checked={difficulty === "hard"}
              onChange={() => setDifficulty("hard")}
              disabled={radioButtonDisabled}
            />
            Hard
          </label>
        </div>
      </div>

      <div id="broj">{started ? randomNumber : 0}</div>
      <div></div>

      <button onClick={handleButton}> {dugme}</button>
      <div>
        <input
          id="location"
          value={letter}
          placeholder="Input letter"
          onChange={handleInputChange}

        />
      </div>
      <Score className="score" brojPogodaka={brojPogodjenih.length} brojPromasaja={brojPromasenih} brojPreostalih="3"/>
    </div>
  );
};

export default Settings;

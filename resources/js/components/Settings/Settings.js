import React, { useState, useEffect,useRef } from "react";
import Score from "../../components/Score/Score.js";
import Letters from "../../components/Letters/Letters.js";

const Settings = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [started, setStarted] = useState(false);
  const [letter, setLetter] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [brojPogodjenih, setBrojPogodjenih] = useState([]);
  const [brojPokusaja,setBrojPokusaja]=useState(26);
  const [brojPromasenih, setBrojPromasenih] = useState(0);
  const [izabranaVrednost, setIzabranaVrednost] = useState([]);


  const dugme = started ? "Stop Game" : "Start Game";
  const [nizVrednosti, setNizVrednosti] = useState([
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
  const handleButton = () => {
    setStarted(!started);
    if (started === true) {
      console.log("NijePocela");
    } else {
      console.log("Pocela je");
    }
  };

  useInterval(() => {
    if(difficulty === "easy" && brojPokusaja>0){
    setRandomNumber(Math.floor(Math.random() * nizVrednosti.length + 1));
    }

  }, 5000);
  useInterval(() => {
    if(difficulty === "medium" && brojPokusaja>0){
    setRandomNumber(Math.floor(Math.random() * nizVrednosti.length + 1));
    }

  }, 3500);
  useInterval(() => {
    if(difficulty === "hard" && brojPokusaja>0){
    setRandomNumber(Math.floor(Math.random() * nizVrednosti.length + 1));
    }

  }, 2000);

  const handleInputChange = event => {
    setLetter(event.target.value);
     const inputDisabled=true;
  };

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }



  useEffect(() => {
    console.log(letter);
    console.log(randomNumber);

    const noviNiz = nizVrednosti.filter(
      item => letter.toUpperCase() == item.letter && randomNumber == item.id
    );
    if (noviNiz != 0) {

      if(brojPokusaja>0){
      setBrojPogodjenih(brojPogodjenih.concat(noviNiz));
      setBrojPokusaja(brojPokusaja-1)
    }else{alert("Nemate vise pokusaja")}
      console.log(brojPogodjenih);
    }
    if(noviNiz.length==0 && letter!=""){

      if(brojPokusaja>0){
      setBrojPromasenih(brojPromasenih+1);
      setBrojPokusaja(brojPokusaja-1);

    }else{alert("Nemate vise pokusaja")}
    }


  }, [letter]);


  const radioButtonDisabled = started ? true : false;
  const inputDisabled = started ? false : true;


  return (
    <div>
    <div>
      <div className="radioFields">
        <div className="radiobtn">
          <label>
            <input
              type="radio"
              value="easy"
              className="form-control"
              checked={difficulty === "easy"}
              onChange={() => setDifficulty("easy")}
              disabled={radioButtonDisabled}
            />
            Easy
          </label>
        </div>
        <div className="radiobtn">
          <label>
            <input
              type="radio"
              value="easy"
              className="form-control"
              checked={difficulty === "medium"}
              onChange={() => setDifficulty("medium")}
              disabled={radioButtonDisabled}
            />
            Medium
          </label>
        </div>
        <div className="radiobtn">
          <label>
            <input
              type="radio"
              value="hard"
              className="form-control"
              checked={difficulty === "hard"}
              onChange={() => setDifficulty("hard")}
              disabled={radioButtonDisabled}
            />
            Hard
          </label>
        </div>
      </div>

      <div id="broj" className="broj">{started ? randomNumber : 0}</div>
      <div></div>

      <button className=" btn btn-primary" onClick={handleButton}> {dugme}</button>
      <div>
        <input
          className="input"
          id="letter"
          maxLength={1}
          value={letter.toUpperCase()}
          placeholder="Input letter"
          disabled={inputDisabled}
          onChange={handleInputChange}
        />
      </div>
      <Score
        className="score"
        brojPogodaka={brojPogodjenih.length}
        brojPromasaja={brojPromasenih}
        brojPreostalih={brojPokusaja}
      />
      </div>

    </div>
  );
};

export default Settings;

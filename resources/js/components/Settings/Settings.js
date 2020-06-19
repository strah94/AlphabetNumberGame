import React, { useState } from "react";

const Settings = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [started, setStarted] = useState(false);
  const [letter,setLetter]=useState("");
  const dugme = started ? "Stop Game" : "Start Game";

  const handleButton = () => {
    setStarted(!started);
  };

  const radioButtonDisabled=started ? true:false



  return (
    <div >
    <div className="radioFields">
      <div className="radio" >
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

    <div id="broj"> 17</div>
    <div>

     </div>

      <button onClick={handleButton}> {dugme}</button>
      <div>
      <input
             id="location"
             value={letter}
             placeholder="Input letter"
             onChange={e => setLetter(e.target.value)}

           />
      </div>
    </div>


  );
};

export default Settings;

import React from "react";

const Score = (props) => {
  return (
    <div className="score">
      <h1 >SCORE</h1>
      <h2 id="hits" className="posebniSkor" style={{ color: "green" }}>HITS: {props.brojPogodaka}</h2>
      <h2 id="miss" className="posebniSkor" style={{ color: "red" }}>MISS: {props.brojPromasaja}</h2>
      <h2 id="left" className="posebniSkor" style={{ color: "blue" }}>LEFT: {props.brojPreostalih}</h2>
    </div>
  );
};

export default Score;

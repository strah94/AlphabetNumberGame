import React from "react";

const Score = () => {
  return (
    <div className="score">
      <h1>SCORE</h1>
      <h2 id="hits" style={{ color: "green" }}>HITS: brojPogodaka</h2>
      <h2 id="miss" style={{ color: "red" }}>MISS: brojPromasaja</h2>
      <h2 id="left" style={{ color: "blue" }}>LEFT: brojPreostalih</h2>
    </div>
  );
};

export default Score;

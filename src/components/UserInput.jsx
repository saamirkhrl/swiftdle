import React, { useState } from "react";
import Result from "./Result";

function UserInput(props) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("def");

  let song = props.song;

  const handleGuess = () => {
    if (input.toLowerCase() !== song.toLowerCase()) {
      setResult("False");
    } else {
      setResult("True");
    }
  };

  const enterGuess = (event) => {
    if (event.key === "Enter") {
      handleGuess();
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Guess the song..."
          onKeyDown={enterGuess}
        />
        <button onClick={handleGuess}>Guess</button>
      </div>
      <Result result={result} song={props.song} album={props.album} />
    </>
  );
}

export default UserInput;

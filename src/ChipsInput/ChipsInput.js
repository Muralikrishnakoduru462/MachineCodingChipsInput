import React, { useState } from "react";
import './ChipsInput.css';
const ChipsInput = () => {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);
  const onHandleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };
  const onDeleteChip = (index) => {
    const copyChips = [...chips];
    console.log("copyChips",copyChips);
    copyChips.splice(index, 1);
    console.log("copyChips after splice",copyChips);
    setChips(copyChips);
  };

  return (
      <div  className="container">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="inputBox"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => onHandleKeyDown(e)}
      />
      <div className="subContainer">
        {chips.map((chip, index) => (
          <div className="chip" key={index}>
            {chip}
            <button className="deleteChip" onClick={() => onDeleteChip(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;

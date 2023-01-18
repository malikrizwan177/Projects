import React, { useState } from "react";
import axios from "axios";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const createTodo = (data) => {
    axios.post("http://localhost:5000/createTodo", {
        data: inputText,
      }).then((response) => alert("Todo Created"));
  };

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          console.log(inputText)
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span onClick={createTodo}>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

import { useState } from "react";

function InputForm({ handleClick }) {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    handleClick(text);
  };

  const transferText = () => {};

  return (
    <div>
      <form>
        <label>Enter sentence here</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </form>
      <button onClick={handleOnClick}>Check</button>
    </div>
  );
}

export default InputForm;

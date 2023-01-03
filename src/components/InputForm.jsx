import { useState } from "react";

function InputForm() {
  const [text, setText] = useState("");

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
      <button>Check</button>
    </div>
  );
}

export default InputForm;

import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";

function App() {
  const [sent, setSent] = useState("");

  useEffect(() => {});

  const checkVowel = (text) => {
    setSent(text);
  };

  return (
    <div className="App">
      <InputForm handleClick={checkVowel} />
      <h1>Number of vowels:</h1>
      <Counter str={sent} />
    </div>
  );
}

export default App;

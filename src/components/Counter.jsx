function Counter({ str }) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      result++;
    }
  }

  return <h1>{result}</h1>;
}

export default Counter;

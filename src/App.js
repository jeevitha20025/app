import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(` ${num1} + ${num2} = ${sum}`);
  };

  return (
    <div className="App">
      <h1>CALULATOR TO ADD TWO NUMBERS</h1>
      <input
        //type="number"
        //placeholder=" "
        value={num1}
        onChange={handleNum1Change} 
      /> 
      <input
        //type="number"
        //placeholder=" "
        value={num2}
        onChange={handleNum2Change}
      /> <br></br><br></br>
      <button onClick={handleAddition}>Add</button>
      <div>{result}</div>
    </div>
  );
}

export default App;
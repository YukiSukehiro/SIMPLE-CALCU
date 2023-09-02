
import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  
  const handleNum1Change = (e) => {
    const value = e.target.value;
    if (isNumeric(value)) {
      setNum1(value);
    }
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    if (isNumeric(value)) {
      setNum2(value);
    }
  };

  const handleAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  const isNumeric = (value) => {
    return /^-?\d*(\.\d+)?$/.test(value);
  };

  return (
    <>
    <div >
      <input className='input1' type="text" value={num1} onChange={handleNum1Change} />
      <input className='input2' type="text" value={num2} onChange={handleNum2Change} />
      <br />
      <button className="button1" onClick={handleAdd}>Add</button>
      <button className="button2" onClick={handleSubtract}>Subtract</button>
      <button className="button3" onClick={handleMultiply}>Multiply</button>
      <button className="button4" onClick={handleDivide}>Divide</button>
      <br />
      <h1 className='result'>{result}</h1>
    </div>
    </>
  );
}

export default App;
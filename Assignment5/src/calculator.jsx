import  { useState } from 'react';
import './calculator.css'; 

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [activeOperation, setActiveOperation] = useState(null);

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

    setActiveOperation(operation);
    
    switch (operation) {
      case 'add':
        setResult((n1 + n2).toLocaleString());
        break;
      case 'subtract':
        setResult((n1 - n2).toLocaleString());
        break;
      case 'multiply':
        setResult((n1 * n2).toLocaleString());
        break;
      case 'divide':
        setResult(n2 === 0 ? '∞ (Cannot divide by zero)' : (n1 / n2).toLocaleString());
        break;
      default:
        setResult('Invalid operation');
    }
  };

  const resetCalculator = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setActiveOperation(null);
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Calculator</h1>
      
      <div className="input-group">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="calculator-input"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="calculator-input"
        />
      </div>

      <div className="button-group">
        <button 
          onClick={() => calculate('add')} 
          className={`operation-button ${activeOperation === 'add' ? 'active' : ''}`}
        >
          <span className="operator-icon">+</span> Add
        </button>
        <button 
          onClick={() => calculate('subtract')} 
          className={`operation-button ${activeOperation === 'subtract' ? 'active' : ''}`}
        >
          <span className="operator-icon">−</span> Subtract
        </button>
        <button 
          onClick={() => calculate('multiply')} 
          className={`operation-button ${activeOperation === 'multiply' ? 'active' : ''}`}
        >
          <span className="operator-icon">×</span> Multiply
        </button>
        <button 
          onClick={() => calculate('divide')} 
          className={`operation-button ${activeOperation === 'divide' ? 'active' : ''}`}
        >
          <span className="operator-icon">÷</span> Divide
        </button>
      </div>

      <button onClick={resetCalculator} className="reset-button">
        Clear All
      </button>

      {result && (
        <div className="result-display">
          <div className="result-label">Result:</div>
          <div className="result-value">{result}</div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
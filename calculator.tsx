import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(num.toString());
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num.toString() : display + num);
    }
  };

  const handleOperation = (op) => {
    const current = parseFloat(display);
    if (prevValue === null) {
      setPrevValue(current);
    } else if (operation) {
      const result = calculate(prevValue, current, operation);
      setPrevValue(result);
      setDisplay(result.toString());
    }
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? 'Error' : a / b;
      default: return b;
    }
  };

  const handleEquals = () => {
    const current = parseFloat(display);
    if (operation && prevValue !== null) {
      const result = calculate(prevValue, current, operation);
      setDisplay(result.toString());
      setPrevValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handlePlusMinus = () => {
    setDisplay((parseFloat(display) * -1).toString());
  };

  const handlePercentage = () => {
    setDisplay((parseFloat(display) / 100).toString());
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="w-96 bg-purple-100 p-6 rounded-lg">
      {/* Display */}
      <div className="mb-6 bg-white p-4 border-4 border-purple-600" 
           style={{
             borderRadius: '30px',
             borderTopLeftRadius: '40px',
             borderBottomRightRadius: '45px',
             borderStyle: 'solid'
           }}>
        <div className="text-right text-3xl font-mono h-12 overflow-hidden text-purple-900">
          {display}
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Function Buttons */}
        <button onClick={handleClear} 
          className="bg-purple-500 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '35% 65% 35% 65% / 50% 50% 50% 50%',
          }}>
          AC
        </button>
        <button onClick={handlePlusMinus}
          className="bg-purple-500 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '65% 35% 65% 35% / 50% 50% 50% 50%',
          }}>
          +/-
        </button>
        <button onClick={handlePercentage}
          className="bg-purple-500 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '40% 60% 40% 60% / 40% 60% 40% 60%',
          }}>
          %
        </button>
        <button onClick={() => handleOperation('÷')}
          className="bg-blue-500 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '60% 40% 60% 40% / 60% 40% 60% 40%',
          }}>
          ÷
        </button>

        {/* Numbers */}
        {[7, 8, 9].map((num) => (
          <button key={num} onClick={() => handleNumber(num)}
            className="bg-purple-400 text-white p-4 text-xl font-bold"
            style={{
              borderRadius: `${30 + Math.random() * 20}% ${70 - Math.random() * 20}% ${30 + Math.random() * 20}% ${70 - Math.random() * 20}% / 55% 45% 55% 45%`,
            }}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperation('×')}
          className="bg-blue-500 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '45% 55% 45% 55% / 55% 45% 55% 45%',
          }}>
          ×
        </button>

        {[4, 5, 6].map((num) => (
          <button key={num} onClick={() => handleNumber(num)}
            className="bg-purple-400 text-white p-4 text-xl font-bold"
            style={{
              borderRadius: `${35 + Math.random() * 20}% ${65 - Math.random() * 20}% ${35 + Math.random() * 20}% ${65 - Math.random() * 20}% / 50% 50% 50% 50%`,
            }}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperation('-')}
          className="bg-blue-500 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '55% 45% 55% 45% / 45% 55% 45% 55%',
          }}>
          -
        </button>

        {[1, 2, 3].map((num) => (
          <button key={num} onClick={() => handleNumber(num)}
            className="bg-purple-400 text-white p-4 text-xl font-bold"
            style={{
              borderRadius: `${40 + Math.random() * 20}% ${60 - Math.random() * 20}% ${40 + Math.random() * 20}% ${60 - Math.random() * 20}% / 45% 55% 45% 55%`,
            }}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperation('+')}
          className="bg-blue-500 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '40% 60% 40% 60% / 60% 40% 60% 40%',
          }}>
          +
        </button>

        {/* Bottom Row */}
        <button onClick={() => handleNumber(0)}
          className="col-span-2 bg-purple-400 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '70% 30% 70% 30% / 30% 70% 30% 70%',
          }}>
          0
        </button>
        <button onClick={handleDecimal}
          className="bg-purple-400 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '45% 55% 45% 55% / 55% 45% 55% 45%',
          }}>
          .
        </button>
        <button onClick={handleEquals}
          className="bg-blue-600 text-white p-4 text-xl font-bold"
          style={{
            borderRadius: '35% 65% 35% 65% / 65% 35% 65% 35%',
          }}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;

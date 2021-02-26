import React, { useCallback, useState } from 'react';
import './App.css';

export function App() {
  const [counter, setCounter] = useState(0);

  const onIncClick = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  const onDecClick = useCallback(() => {
    setCounter(counter - 1)
  }, [counter])

  return (
    <div className="App">
      <button className="button" onClick={onDecClick}>Decrease</button>
      <span className="counter">{counter}</span>
      <button className="button" onClick={onIncClick}>Increase</button>
    </div>
  );
}

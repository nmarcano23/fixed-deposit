import React from 'react';
import ProfitCalculator from '../profit_calculator'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¿Deposito a plazo fijo?</h1>
        <h3>Calcula tus ganancias</h3>
      </header>
      <ProfitCalculator />
      <div className='.App-content'>
        
      </div>
    </div>
  );
}

export default App;

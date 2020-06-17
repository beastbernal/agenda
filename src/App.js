import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from "./Components/Cards";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este es el primer commit
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Cards></Cards>
      <Card></Card>
    </div>
  );
}

export default App;

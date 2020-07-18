import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}
function MyApp() {
  console.log("This is my own App.");
  return(
      <div>
        <h3>
          Header2
        </h3>
        <p>
          This is the paragraph.
        </p>
      </div>
  );
}
ReactDOM.render(MyApp(), document.getElementById('root2'));

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
const axios = require("axios");

function App() {
  const [fruit, setFruit] = useState();
  const [characters, setCharacters] = useState();
  const [buttonCount, setButtonCount] = useState(0);

  useEffect(() => {
    async function getRickAndMortyData() {
      const result = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(result.data);
    }

    async function threeSecondBananas() {
      setTimeout(() => {
        setFruit("bananas");
      }, 3000);
    }

    threeSecondBananas();
    getRickAndMortyData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          The Rick and Morty API returned this many results:{" "}
          {characters?.info?.count}
        </p>
        <p>My favorite fruit is ... {fruit}</p>

        <p>You clicked {buttonCount} times</p>

        <button onClick={() => setButtonCount(buttonCount + 1)}>
          Increment Count
        </button>

        <button onClick={() => setButtonCount(buttonCount - 1)}>
          Decrement Count
        </button>

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

export default App;

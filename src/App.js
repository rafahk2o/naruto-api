import "./App.css";
import React, { useState } from "react";
import InputSearch from "./components/InputSearch";
import { useEffect } from "react";

const api = "https://kitsu.io/api/edge/";

function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    
    if (text) {
    setInfo({});
      fetch(`${api}anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>
      <InputSearch value={text} onChange={(search) => setText(search)} />
      {text && !info.data && (
        <span>Carregando...</span>
      )}
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.posterImage} />
              {anime.attributes.canonicalTitle}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

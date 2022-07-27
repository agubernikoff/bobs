import React, { useState } from "react";
import BurgerOfTheDay from "./BurgerOfTheDay";
import List from "./List";

function Home() {
  const [category, setCategory] = useState("");
  function closeList() {
    setCategory("");
  }
  return (
    <div className="home">
      <BurgerOfTheDay />
      {category ? (
        <List category={category} closeList={closeList} />
      ) : (
        <div className="options-container">
          <h1
            className="options"
            onClick={(e) => {
              setCategory(e.target.innerText);
            }}
          >
            CHARACTERS
          </h1>
          <h1
            className="options"
            onClick={(e) => {
              setCategory(e.target.innerText);
            }}
          >
            EPISODES
          </h1>
          <h1
            className="options"
            onClick={(e) => {
              setCategory(e.target.innerText);
            }}
          >
            STORES NEXT DOOR
          </h1>
          <h1
            className="options"
            onClick={(e) => {
              setCategory(e.target.innerText);
            }}
          >
            PEST CONTROL TRUCKS
          </h1>
          <h1
            className="options"
            onClick={(e) => {
              setCategory(e.target.innerText);
            }}
          >
            ALEXIS' FAVORITES
          </h1>
        </div>
      )}
    </div>
  );
}

export default Home;

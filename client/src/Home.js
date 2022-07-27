import React from "react";
import BurgerOfTheDay from "./BurgerOfTheDay";

function Home() {
  return (
    <div className="home">
      <BurgerOfTheDay />
      <div>
        <h1 className="options">CHARACTERS</h1>
        <h1 className="options">EPISODES</h1>
        <h1 className="options">STORES NEXT DOOR</h1>
        <h1 className="options">PEST CONTROL TRUCKS</h1>
        <h1 className="options">ALEXIS' FAVORITES</h1>
      </div>
    </div>
  );
}

export default Home;

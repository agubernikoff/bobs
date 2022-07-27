import React, { useState, useEffect } from "react";

function BurgerOfTheDay() {
  const [burgerName, setBurgerName] = useState("");
  const [burgerPrice, setBurgerPrice] = useState("");
  const burgerNumber = Math.floor(Math.random() * 333);
  useEffect(() => {
    fetch(
      `https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${burgerNumber}`
    )
      .then((r) => r.json())
      .then((burger) => {
        console.log(burger.name);
        setBurgerName(burger.name);
        setBurgerPrice(burger.price);
      });
  }, []);
  return (
    <div id="burgerOfTheDay">
      <p>{burgerName}</p>
      <p>{burgerPrice}</p>
    </div>
  );
}

export default BurgerOfTheDay;

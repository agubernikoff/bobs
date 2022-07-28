import React, { useState, useEffect } from "react";
import Card from "./Card";

function List({ category, closeList }) {
  const [url, setURL] = useState("");
  const [listItems, setListItems] = useState([]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    if (category === "CHARACTERS" || category === "EPISODES") {
      setURL(category.toLowerCase());
    } else if (category === "STORES NEXT DOOR") setURL("storeNextDoor");
    else if (category === "PEST CONTROL TRUCKS") setURL("pestControlTruck");
  }, []);

  useEffect(() => {
    if (url)
      fetch(`https://bobsburgers-api.herokuapp.com/${url}/`)
        .then((r) => r.json())
        .then((data) => setListItems(data));
  }, [url]);
  console.log(listItems);

  const mappedItems = listItems.map((item) => (
    <li
      key={item.name + item.id.toString()}
      onClick={() => setClicked([...clicked, item])}
    >
      {item.name ? item.name : "N/A - click me anyway!"}
    </li>
  ));

  const mappedCards = clicked.map((item) => (
    <Card item={item} key={item.name + item.id.toString()} />
  ));
  return (
    <div className="list">
      <ul>{mappedItems}</ul>
      <div className="card-container">{mappedCards}</div>
      <button onClick={closeList} className="xbtn">
        X
      </button>
    </div>
  );
}

export default List;

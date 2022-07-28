import React, { useState, useEffect } from "react";

function List({ category, closeList }) {
  const [url, setURL] = useState("");
  const [listItems, setListItems] = useState([]);

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
    <li>{item.name ? item.name : "N/A - click me anyway!"}</li>
  ));
  return (
    <div className="list">
      <button onClick={closeList}>X</button>
      <ul>{mappedItems}</ul>
    </div>
  );
}

export default List;

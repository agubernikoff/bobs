import React from "react";

function List({ category, closeList }) {
  return (
    <div className="list">
      <button onClick={closeList}>X</button>
    </div>
  );
}

export default List;

import React from "react";

function Card({ item, closeCard }) {
  console.log(item);
  return (
    <div className="card">
      <button onClick={() => closeCard(item.id)}>X</button>
      <h1>{item.name}</h1>
      {item.image ? <img src={item.image} alt={item.name} /> : null}
      {item.firstEpisode ? (
        <p>
          <strong>First Appearance: </strong>
          {item.firstEpisode}
        </p>
      ) : null}
      {item.voicedBy ? (
        <p>
          <strong>Voiced By: </strong>
          {item.voicedBy}
        </p>
      ) : null}
      {item.occupation ? (
        <p>
          <strong>Occupation: </strong>
          {item.occupation}
        </p>
      ) : null}
      {item.wikiUrl ? (
        <p>
          <strong>Wiki URL: </strong>
          <a href={item.wikiUrl}>{item.wikiUrl}</a>
        </p>
      ) : null}
      {Number.isInteger(item.episode) ? (
        <p>
          Season {item.season} Episode {item.episode}
        </p>
      ) : null}
      {item.airDate ? (
        <p>
          {/* <strong>Air date: </strong> */}
          {item.airDate}
        </p>
      ) : null}
      {item.totalViewers ? (
        <p>
          <strong>Total Viewers: </strong>
          {item.totalViewers}
        </p>
      ) : null}
    </div>
  );
}

export default Card;

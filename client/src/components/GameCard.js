import React from 'react';

const GameCard = () => {
  return (
    <div className="ui card">
      <a className="image" href="/snake">
        <img src={require("../pages/SnakeGamePage/SnakeThumb.png")} />
      </a>
      <div className="content">
        <a className="header" href="/snake">Play Snake!</a>
        <div className="meta">
          <a href="https://github.com/ryanschuttig" target="_blank">Contributor: Ryan Schuttig</a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
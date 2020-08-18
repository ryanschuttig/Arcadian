import React from 'react';

const GameCardMemory = () => {
  return (
    <div className="ui card">
      <a className="image" href="/memory">
        <img src={require("../pages/MemoryGamePage/memoryPic.png")} />
      </a>
      <div className="content">
        <a className="header" href="/memory">Play Memory Game!</a>
        <div className="meta">
          <a href="https://github.com/Cholmes1994" target="_blank">Contributor: Chris Holmes</a>
        </div>
      </div>
    </div>
  );
};

export default GameCardMemory;
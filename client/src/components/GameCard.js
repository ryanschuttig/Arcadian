import React from 'react';

const GameCard = ({name, image, href, github, contributor}) => {
  return (
    <div className="ui card">
      <a className="image" href={href}>
        <img src={image} />
      </a>
      <div className="content">
        <a className="header" href={href}>Play {name}!</a>
        <div className="meta">
          <a href= {github} target="_blank">{contributor}</a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
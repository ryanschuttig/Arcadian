import React from 'react';
import './GameCard.css'

const GameCard = ({ name, image, href, github, contributor, language }) => {
  return (
      <div className="ui card">
        <a className="image" href={href}>
          <img src={image} />
        </a>
        <div className="content border">
          <a className="header" href={href}>Play {name}! - {language}</a>
          <div className="meta">
            <a href={github} target="_blank">{contributor}</a>
          </div>
        </div>
      </div>
  );
};

export default GameCard;
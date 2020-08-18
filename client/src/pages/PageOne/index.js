import React, { useState } from 'react';
import { Header, Message } from "semantic-ui-react";
import "../PageOne/style.css";
import GameCard from "../../components/GameCard";
import GameCardMemory from "../../components/GameCardMemory";

export const PageOne = () => {
    const [games, setGames] = useState([
        {
            "name": "Snake",
            "image": require("../SnakeGamePage/SnakeThumb.png"),
            "href": "/snake",
            "github": "https://github.com/ryanschuttig",
            "contributor": "Contributor: Ryan Schuttig"
        },
        {}
    ])
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> ARCADIAN </Header>
                <p>Play some awesome games below!</p>
            </Message>
            <div className="row">
                {games.length ?
                    games.map(game => (
                        <GameCard
                            href={game.href}
                            name={game.name}
                            image={game.image}
                            github={game.github}
                            contributor={game.contributor}
                        />
                    )) :
                    "Select a game to play!"}
            </div>
        </>
    )
}

export default PageOne;
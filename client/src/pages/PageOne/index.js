import React, { useState } from 'react';
import { Header, Message } from "semantic-ui-react";
import "../PageOne/style.css";
import GameCard from "../../components/GameCard";

export const PageOne = () => {
    const [games, setGames] = useState([
        {
            "name": "Snake",
            "image": require("../SnakeGamePage/SnakeThumb.png"),
            "href": "/snake",
            "github": "https://github.com/ryanschuttig",
            "contributor": "Contributor: Ryan Schuttig"
        },
        {
            "name": "Memory Game",
            "image": require("../MemoryGamePage/memoryPic.png"),
            "href": "/memory",
            "github": "https://github.com/Cholmes1994",
            "contributor": "Contributor: Chris Holmes"
        }
    ])
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge" className="textneon"> ARCADIAN </Header>
                <p>Play some awesome games below!</p>
            </Message>
            <div className="background">
                <div className="container">
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
                </div>
            </div>
        </>
    )
}

export default PageOne;
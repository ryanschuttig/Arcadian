import React, { useState } from 'react';
import { Header, Message } from "semantic-ui-react";
import "../PageOne/style.css";
import GameCard from "../../components/GameCard";
import Footer from "../../components/Footer"

export const PageOne = () => {
    const [games, setGames] = useState([
        {
            "name": "Snake",
            "image": require("../SnakeGamePage/SnakeThumb.png"),
            "href": "/snake",
            "github": "https://github.com/ryanschuttig",
            "contributor": "Contributor: Ryan Schuttig",
            "language": "React.js"
        },
        {
            "name": "Tetris",
            "image": require("../TetrisGamePage/img/TetrisThumb.png"),
            "href": "/tetris",
            "github": "https://github.com/ryanschuttig",
            "contributor": "Contributor: Ryan Schuttig",
            "language": "React.js"
        },
        {
            "name": "Memory",
            "image": require("../MemoryGamePage/memoryPic.png"),
            "href": "/memory",
            "github": "https://github.com/Cholmes1994",
            "contributor": "Contributor: Chris Holmes",
            "language": "React.js"
        },
        {

            "name": "Tic Tac Toe",
            "image": require("../TictacGamePage/tictac.png"),
            "href": "/tictac",
            "github": "https://github.com/Cholmes1994",
            "contributor": "Contributor: Chris Holmes",
            "language": "React.js"
        }
    ])
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge" className="textneon"> Arcadian </Header>
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
                                    language={game.language}
                                />
                            )) :
                            "Select a game to play!"}
                        <Footer />
                    </div>
                </div>
            </div>
        </>

    )
}

export default PageOne;
import React from 'react';
import { Header, Message } from "semantic-ui-react";
import "../PageOne/style.css";
import GameCard from "../../components/GameCard"


export const PageOne = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> ARCADIAN </Header>
                <p>Play some awesome games below!</p>
            </Message>
            <GameCard />
        </>
    )
}

export default PageOne;
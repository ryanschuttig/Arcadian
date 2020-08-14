import React from 'react';
import { Header, Message } from "semantic-ui-react";
import "../PageOne/style.css"


export const PageOne = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Page One </Header>
                <p>This is a Protected Route</p>
            </Message>
        </>
    )
}

export default PageOne;

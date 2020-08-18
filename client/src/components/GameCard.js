import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const GameCard = () => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="../Components/SnakeGameComponents/SnakeThumb.png" alt="Snake Game" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Play Snake!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
import React from 'react';
import CountUp from 'react-countup';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
const Cards = ({
  cardTitle, value, lastUpdate, cardSubtitle
}) => (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{cardTitle}</CardTitle>
        <h1>
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </h1>
        <CardText>{new Date(lastUpdate).toDateString()}
        </CardText>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{cardSubtitle}</CardSubtitle>
      </CardBody>
    </Card>

  );
export default Cards;
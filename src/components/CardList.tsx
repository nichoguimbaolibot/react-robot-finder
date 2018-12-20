import * as React from 'react';
import Card from './Card';

export interface IRobotObject {
  id: number,
  name: string,
  email: string
}

interface ICardListProps {
  robots: Array<IRobotObject>
}

const CardList = ({robots}: ICardListProps) => {
  return (
    <div>
      {
        robots.map((robot, i) => {
          return (
            <Card
              key={i}
              id={robot.id}
              name={robot.name}
              email={robot.email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
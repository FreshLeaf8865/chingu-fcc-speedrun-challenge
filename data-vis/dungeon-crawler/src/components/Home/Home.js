import React from 'react';

import Cell from './../Cell';
import Row from './../Row';

import './home.scss';

const Home = (props) => {
  if (!props.array) return <div>Loading...</div>
  return (
    <div className="home__container">
      {props.status ? <div className="home__game-status">{props.status}</div> : <div>Health: {props.health}, Level: {props.level}, XP: {props.xp}, Weapon: {props.inHand}</div>}
      <div className="home__board">
        {props.array.map((row, i) => {
          return (
            <Row key={i}>
              {row.map((cell, j) => (
                <Cell
                  key={j}
                  value={cell}
                />
              ))}
            </Row>
          )
        })}
      </div>
    </div>
  )
};

export default Home;


import React from 'react';
import { Link } from 'react-router';

import Chart from './Chart';
import Quote from './Quote';

const tweetIt = (props) => {
  let twitLink = "https://twitter.com/intent/tweet?text=" + `${props.name} - $${props.close.toFixed(2)}`;
  window.open(twitLink);
}

const Home = (props) => {
  return (
    <div className="home__container">
      <Quote name={props.name} close={props.close}/>
      <Chart data={props.data} dateOnly={props.dateOnly}/>
      <div className="home__controls">
        <button onClick={props.updateQuote}>New quote</button>
        <button onClick={tweetIt.bind(null, props)}>Tweet</button>
      </div>
    </div>
  )
}

export default Home;

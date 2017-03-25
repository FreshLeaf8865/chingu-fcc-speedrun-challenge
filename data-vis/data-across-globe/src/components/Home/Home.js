import React from 'react';

import MapGraph from './../MapGraph';

import './home.scss';

const Home = (props) => {
  const { data, width, height } = props;

  return (
    <div className="home__container" id="home">
      {/* {data ? <MapGraph {...props} totalWidth={width} totalHeight={height}/> : <div>Loading....</div>} */}
      <MapGraph {...props} totalWidth={width} totalHeight={height}/>
    </div>
  )
};

export default Home;

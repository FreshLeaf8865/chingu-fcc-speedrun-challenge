
import React from 'react';
import { Link } from 'react-router';

import Articles from './Articles';
import Search from './Search/Search';

const Home = (props) => {
  return (
    <div className="home__container">
      <div className="home__search">
        <Search handleSearch={props.handleSearch}/>
      </div>
      <div className="home__articles">
        <Articles {...props}/>
      </div>
    </div>
  )
}

export default Home;

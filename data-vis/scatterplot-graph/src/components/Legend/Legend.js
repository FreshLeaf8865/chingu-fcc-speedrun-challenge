import * as d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';

import './legend.scss';

const Legend = (props) => (
  <g transform={`translate(${props.x}, ${props.y})`}>
    <circle r="5" style={{fill: 'green', stroke: 'black'}}/>
    <text dx="0.5rem" dy="0.3rem">No doping allegations</text>
    <circle cy="1rem" r="5" style={{fill: 'red', stroke: 'black'}}/>
    <text dx="0.5rem" dy="1.4rem">Alleged doping use</text>
  </g>
)

export default Legend;

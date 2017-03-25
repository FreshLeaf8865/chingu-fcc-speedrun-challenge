import * as d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import * as topojson from 'topojson';

import './main.scss';
// import './d3.geomap.scss';
// import './d3.geomap.min.js';
// import './d3.geomap.dependencies.min.js';
// import * as countriesJSON from './countries.json'

export default class MapGraph extends React.Component {
  componentDidMount() {
    const { data, totalWidth, totalHeight } = this.props;
    renderChart.bind(this, data, totalWidth, totalHeight)();
  }
  render() {
    return (
      <div id="map">
        <div ref="links"></div>
        <div id="chart"></div>
      </div>
    )
  }
}

  function renderChart(data, totalWidth, totalHeight) {
  // const width = totalWidth - margin.left - margin.right;
  // const height = totalHeight - margin.top - margin.bottom;
  const width = totalWidth;
  const height = totalHeight;

  const reactNode = ReactDOM.findDOMNode(this.refs.links);
  const svg = d3.select(reactNode).append('svg');

  svg
    .attr("width", totalWidth)
    .attr("height", totalHeight);

  const projection = d3.geoMercator()
    .translate([width/2, height/2 + 50])
    .scale(250)

  const path = d3.geoPath()
    .projection(projection);

  // console.log(topology);
  d3.queue()
    .defer(d3.json, './countries.json')
    // .defer(d3.json, countriesJSON)
    .defer(d3.json, 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json')
    .await(ready)

  function ready(err, data, meteors) {
    // console.log(meteors.features);
    const countries = topojson.feature(data, data.objects.units).features;
    // console.log(countries);

    svg.selectAll('.country')
      .data(countries)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('d', path);

    svg.selectAll('.meteors')
      .data(meteors.features)
      .enter()
      .append('circle')
      .attr('r', d => {
        const mass = d.properties.mass;
        if (mass / 1000 < 10) return 3;
        if (mass / 1000 > 30) return Math.log(mass / 1000);
        // if (mass / 1000 > 10) return Math.log(mass / 1000);
        // return 10;
        return (mass / 1000);
      })
      .attr('cx', d => {
        // console.log(d);
        if (!d.geometry) return 0;
        return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[0]
        // return 20
      })
      .attr('cy', d => {
        if (!d.geometry) return 0;
        // return 20
        return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[1]
      })
  }


  return {__html: map};
}

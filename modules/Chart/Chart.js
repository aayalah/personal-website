import React from 'react'
import ReactFauxDOM from 'react-faux-dom'
import * as d3 from "d3"
import dataSet from '../../assets/data.js'
import moment from 'moment'
import styles from '../../public/style.css'

class Chart extends React.Component {

  componentDidMount() {
    function zoomed() {
      var data = dataSet.readings;

      var convertTime = function(time) {
        let newDate = time.split("T").join(" ")
        newDate = moment(newDate, "YYYYMMDD HH:mm:ss")
        return newDate
      }

      var minDate = convertTime(data[0].timestamp),
          maxDate = convertTime(data[1].timestamp);

          var margin = {top: 20, right: 20, bottom: 30, left: 40},
              width = 960 - margin.left - margin.right,
              height = 500 - margin.top - margin.bottom,
              padding = 10;


          var svg = d3.select("svg");
          var xScale = d3.scaleTime()
          .domain([minDate, maxDate])
          .range([padding, width - padding * 2]);
          var xAxis = d3.axisBottom().scale(xScale).ticks(d3.timeHour.every(1));

          svg.select(".x.axis").call(xAxis.scale(d3.event.transform.rescaleX(xScale)));
          var newScale = d3.event.transform.rescaleX(xScale);
          d3.selectAll("circle").attr("cx", function(d) { console.log(newScale(convertTime(d.timestamp))) });
    }


    var zoom = d3.zoom()
            .on("zoom", zoomed);
    d3.select("svg").call(zoom);
  }


  render() {



    var data = dataSet.readings;
    var div = new ReactFauxDOM.Element('div')
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    padding = 10;



/*
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */
var convertTime = function(time) {
  let newDate = time.split("T").join(" ")
  newDate = moment(newDate, "YYYYMMDD HH:mm:ss")
  return newDate
}

var minDate = convertTime(data[0].timestamp),
    maxDate = convertTime(data[1].timestamp);
    var yMin = d3.min(data, function (d) { return d.bg_value; }),
        yMax = d3.max(data, function (d) { return d.bg_value; });
// setup x
var xValue = function(d) { return convertTime(d.timestamp);}, // data -> value
      xScale = d3.scaleTime()
      .domain([minDate, maxDate])
      .range([padding, width - padding * 2]),
      xAxis = d3.axisBottom().scale(xScale).ticks(d3.timeHour.every(1)),
      xMap = function(d) { return xScale(xValue(d));};// data -> display


// setup y
var yValue = function(d) { return d.bg_value;}, // data -> value
    yScale = d3.scaleLinear()
    .domain([yMin,yMax])
    .range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.axisLeft().scale(yScale);

var zoom = d3.zoom()
        .on("zoom", zoomed);


// setup fill color
var cValue = function(d) {
      if(d.bg_value < 80) {
        return 'red';
      } else if(d.bg_value > 150) {
        return 'orange';
      } else {
        return 'green';
      }
};


// add the graph canvas to the body of the webpage
var svg = d3.select(div).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        //.call(zoom);

function zoomed() {

      svg.select(".x.axis").call(xAxis.scale(d3.event.transform.rescaleX(xScale)));
      var newScale = d3.event.transform.rescaleX(xScale);
      svg.selectAll("circle").attr("cx", function(d) { return newScale(convertTime(d.timestamp)) });
    }


  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Time (h)");

var tooltip = d3.select("body").append("div")
    .style("opacity", 0);


  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("");

  // draw dots
  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .attr("id", function(date, i) { return "circle" + i;})
      .style("fill", function(d) { return cValue(d);})
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html("<div> " + d.bg_value + " mg/dL </div><div>"  + xValue(d).format("MMM DD, HH:mm a") + " </div>")
               .style("position", "absolute")
               .style("left", (d3.event.pageX + 5) + "px")
               .style("width", "100px")
               .style("background-color", "white")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      });

      return div.toReact()

  }


}

export default Chart

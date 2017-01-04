import React from 'react'
import SectionHeader from './SectionHeader.jsx'
import * as d3 from "d3"
import styles from '../../../styles/style.css'
class DataItem extends React.Component {


  onMouseOver() {

    d3.select("#circle" + this.props.id).classed("circle-highlighted", true);


  }

  onMouseExit() {

    d3.select("#circle" + this.props.id).classed("circle-highlighted", false);

  }

  render() {
    let result = undefined
    if(this.props.displayTime) {
      result = <SectionHeader date={this.props.displayTime}/>
    }
    return <div>{result}<div onMouseEnter={this.onMouseOver.bind(this)} onMouseLeave={this.onMouseExit.bind(this)} className="listItem"> <div className="data"><span className="text">{this.props.reading} <span className="unit">mg/dL</span></span><span className="time">{this.props.time.format("HH:mm a")}</span></div></div></div>
  }


}

export default DataItem

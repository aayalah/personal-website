"use strict";
import React from 'react'
import {render} from 'react-dom'
import DataList from '../DataList/DataList.jsx'
import Chart from '../Chart/Chart.jsx'
import styles from '../../styles/style.css'



const DataVis  = React.createClass({

  render() {

    return <div className="app">
          <DataList/>
          <Chart/>
          </div>
  }

});

export default DataVis;

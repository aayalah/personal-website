"use strict";
import React from 'react'
import {render} from 'react-dom'
import DataList from '../DataList/DataList'
import Chart from '../Chart/Chart'
import styles from '../../public/style.css'



const DataVis  = React.createClass({

  render() {

    return (<div className="app">
          <DataList/>
          <Chart/>
          </div>)
  }

});

export default DataVis;

import React from 'react'
import {render} from 'react-dom'
import DataList from '../DataList/DataList.jsx'
import Chart from '../Chart/Chart.jsx'
import styles from '../../styles/style.css'



export default class DataVis extends React.Component {


  render() {

    return <div className="app">
          <DataList/>
          <Chart/>
          </div>
  }

}

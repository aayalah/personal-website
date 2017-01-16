import React from 'react'
import data from '../../assets/data.js'
import DataItem from './Components/DataItem'
import SectionHeader from './Components/SectionHeader'
import moment  from 'moment'
import styles from '../../public/style.css'
class DataList extends React.Component {

  render() {
    let date = "test"
    let readings = data.readings
    return <div id="list">{readings.map((item, key) => {
      let newDate = item.timestamp.split("T").join(" ")
      newDate = moment(newDate, "YYYYMMDD HH:mm:ss")
      let displayDate = newDate

      if(newDate.isSame(date)) {
        displayDate = undefined
      }

      date = newDate
      return <DataItem key={key} id={key} meal={item.meal} reading={item.bg_value} displayTime={displayDate} time={newDate}/>;

    })}</div>

  }

}

export default DataList

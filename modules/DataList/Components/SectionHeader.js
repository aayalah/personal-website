import React from 'react'
import styles from '../../../public/style.css'
class SectionHeader extends React.Component {

  render() {
    let date = this.props.date.format("dddd, MMMM DD YYYY")
    return <div className="sectionHeader">{date}</div>
  }


}
export default SectionHeader

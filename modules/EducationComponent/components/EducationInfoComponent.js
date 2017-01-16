"use strict";
import React from 'react'

import styles from '../../../public/style.css'

class EducationInfoComponent extends React.Component {

  render() {

    return    <h4 className="educationInfo">{this.props.education.degree}, <span>{this.props.education.college}</span> <span>{this.props.education.date}</span></h4>

  }

}

export default EducationInfoComponent

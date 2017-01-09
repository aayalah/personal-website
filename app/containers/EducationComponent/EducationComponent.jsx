"use strict";
import React from 'react'

import styles from '../../styles/style.css'

import {educationData} from '../../assets/data.js'
import EducationInfoComponent from './components/EducationInfoComponent.jsx'

class EducationComponent extends React.Component {

  _renderSections() {
    return educationData.map((item, key) => <EducationInfoComponent key={key} education={item}/>)

  }


  render() {

    return <section className="mainSection">
            <h2 id="Education"> Education </h2>
            {this._renderSections()}
            </section>
  }

}

export default EducationComponent

import React from 'react'

import styles from '../../styles/style.css'

import {experienceData} from '../../assets/data.js'
import ExperienceComponent from './components/ExperienceComponent.jsx'

class ExperiencesComponent extends React.Component {

  _renderSections() {
    console.log(experienceData)
    return experienceData.map((item, key) => <ExperienceComponent key={key} experience={item}/>)

  }


  render() {

    return <section>
            <h2 id="Experience"> Professional Experience </h2>
            {this._renderSections()}
            </section>



  }

}

export default ExperiencesComponent

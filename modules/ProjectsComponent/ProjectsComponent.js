import React from 'react'

import styles from '../../public/style.css'

import {projectData} from '../../assets/data.js'
import ProjectTypeComponent from './components/ProjectTypeComponent'
import NavigationComponent from './components/NavigationComponent'

class ProjectsComponent extends React.Component {

  _renderSections() {
    return Object.keys(projectData).map((item, key) => <ProjectTypeComponent key={key} title ={item} projects={projectData[item]}/>)

  }


  render() {

    console.log(this._renderSections())

    return <section className="mainSection">
            <h2 id="Projects"> Projects </h2>
            <NavigationComponent links={Object.keys(projectData)}/>
            {this._renderSections()}
            </section>



  }

}

export default ProjectsComponent

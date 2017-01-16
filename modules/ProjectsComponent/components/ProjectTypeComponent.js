import React from 'react'

import styles from '../../../public/style.css'

import ProjectComponent from './ProjectComponent'

class ProjectTypeComponent extends React.Component {

  _renderSections() {

    return this.props.projects.map((item, key) => <ProjectComponent key={key} project={item}/>)

  }


  render() {



    return <section id={this.props.title}>
            <h3>{this.props.title}</h3>
            {this._renderSections()}
            </section>



  }

}

export default ProjectTypeComponent

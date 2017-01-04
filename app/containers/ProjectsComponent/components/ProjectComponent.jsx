import React from 'react'

import styles from '../../../styles/style.css'

class ProjectComponent extends React.Component {

  _formatDescription(desc) {
    //return desc.split(“ ”).map((item) =>{item}<br/>)
  }


  render() {
    return <section>
            <a href={this.props.project.link}><h4>{this.props.project.title}</h4></a>
            <p>{this.props.project.description}</p>
            </section>
  }

}

export default ProjectComponent

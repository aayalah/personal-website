import React from 'react'

import styles from '../../../public/style.css'

class ExperienceComponent extends React.Component {

  render() {

    return <section>
            <h4>{this.props.experience.role}, <span>{this.props.experience.company}</span> <span>{this.props.experience.date}</span></h4>
            <p>{this.props.experience.description}</p>
            </section>
  }

}

export default ExperienceComponent

import React from 'react'

import styles from '../../styles/style.css'


class NavigationComponent extends React.Component {

  render() {
    return <nav className="nav">
            <ul>
              <li><a href="#Summary">Summary</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Experience">Professional Experience</a></li>
              <li><a href="#Education">Education</a></li>
            </ul>
          </nav>
  }

}

export default NavigationComponent

"use strict";
import React from 'react'
import { Link, withRouter } from 'react-router'
import styles from '../../public/style.css'


const NavigationComponent =  React.createClass({

  render() {
    return <nav className="nav">
            <ul>
              <li><Link to="/about">About</Link></li>
              <<li><Link to="/projects">Projects</Link></li>
              <li><Link to="/professionalExperience">Professional Experience</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/codingChallenge">Coding Challenge</Link></li>
              <li><Link to="/dataVis">Data Visualization</Link></li>
            </ul>
          </nav>
  }

});

export default NavigationComponent;

"use strict";
import React from 'react'
import { Link, withRouter } from 'react-router'
import styles from '../../styles/style.css'


const NavigationComponent =  React.createClass({

  render() {
    return <nav className="nav">
            <ul>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Experience">Professional Experience</a></li>
              <li><a href="#Education">Education</a></li>
              <li><Link to={`/codingChallenge`}>Coding Challenge</Link></li>
              <li><Link to={`/dataVis`}>Data Visualization</Link></li>
            </ul>
          </nav>
  }

});

export default NavigationComponent;

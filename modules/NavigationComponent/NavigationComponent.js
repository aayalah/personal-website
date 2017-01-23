"use strict";
import React from 'react'
import Link from 'react-router/lib/Link'
import styles from '../../public/style.css'
import NavLink from '../NavLink'

const NavigationComponent =  React.createClass({

  render() {
    return <nav className="nav">
            <ul>
              <li><NavLink to="/" onlyActiveOnIndex={true}>About</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/experiences">Professional Experience</NavLink></li>
              <li><NavLink to="/education">Education</NavLink></li>
              <li><NavLink to="/codingChallenge">Coding Challenge</NavLink></li>
              <li><NavLink to="/dataVis">Data Visualization</NavLink></li>
            </ul>
          </nav>
  }

});

export default NavigationComponent;

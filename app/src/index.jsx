"use strict";
import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link, hashHistory, withRouter, IndexRoute } from 'react-router'


import styles from '../styles/style.css'
import DataVis from '../containers/DataVis/DataVis.jsx'
import ChallengeApp from '../containers/CodingChallenge/ChallengeApp.jsx'
import HeaderComponent from '../containers/HeaderComponent/HeaderComponent.jsx'
import ProfileImageComponent from '../containers/ProfileImageComponent/ProfileImageComponent.jsx'
import NavigationComponent from '../containers/NavigationComponent/NavigationComponent.jsx'
import SummaryComponent from '../containers/SummaryComponent/SummaryComponent.jsx'
import ProjectsComponent from '../containers/ProjectsComponent/ProjectsComponent.jsx'
import ExperiencesComponent from '../containers/ExperienceComponent/ExperiencesComponent.jsx'
import EducationComponent from '../containers/EducationComponent/EducationComponent.jsx'

const Home = React.createClass({
  render() {
    <div className="app">
    <HeaderComponent/>
    <NavigationComponent/>
    <SummaryComponent/>
    <ProjectsComponent/>
    <ExperiencesComponent/>
    <EducationComponent/>
    </div>
  }

})


const App = React.createClass({


  render() {

    return <div></div>


  }

})



  render((
    <Router history={hashHistory}>
      <Route path="*" component={App}>
        //<IndexRoute component={Home}/>
      <Route path="/codingChallenge" component={ChallengeApp}/>
      <Route path="/dataVis" component={DataVis}/>
      </Route>

    </Router>
  ), document.getElementById('app'))



//render(<App/>, document.getElementById('app'))

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'
import DataVis from './DataVis/DataVis'
import ChallengeApp from './CodingChallenge/ChallengeApp'
import ProjectsComponent from './ProjectsComponent/ProjectsComponent'
import ExperienceComponent from './ExperienceComponent/ExperiencesComponent'
import EducationComponent from './EducationComponent/EducationComponent'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/projects" component={ProjectsComponent}/>
    <Route path="/experiences" component={ExperienceComponent}/>
    <Route path="/education" component={EducationComponent}/>
    <Route path="/codingChallenge" component={ChallengeApp}/>
    <Route path="/dataVis" component={DataVis}/>
  </Route>
)

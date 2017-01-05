
import React from 'react'
import {render} from 'react-dom'
//import DataList from '../containers/DataList/DataList.jsx'
//import Chart from '../containers/Chart/Chart.jsx'
import styles from '../styles/style.css'
import HeaderComponent from '../containers/HeaderComponent/HeaderComponent.jsx'
import ProfileImageComponent from '../containers/ProfileImageComponent/ProfileImageComponent.jsx'
import NavigationComponent from '../containers/NavigationComponent/NavigationComponent.jsx'
import SummaryComponent from '../containers/SummaryComponent/SummaryComponent.jsx'
import ProjectsComponent from '../containers/ProjectsComponent/ProjectsComponent.jsx'
import ExperiencesComponent from '../containers/ExperienceComponent/ExperiencesComponent.jsx'
import EducationComponent from '../containers/EducationComponent/EducationComponent.jsx'



class App extends React.Component {


  render() {

    return <div className="app">
          <HeaderComponent/>
          <NavigationComponent/>
          <SummaryComponent/>
          <ProjectsComponent/>
          <ExperiencesComponent/>
          <EducationComponent/>
          </div>
  }

}

render(<App/>, document.getElementById('app'))

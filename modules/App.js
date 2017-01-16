import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import HeaderComponent from './HeaderComponent/HeaderComponent'
import NavigationComponent from './NavigationComponent/NavigationComponent'
export default React.createClass({
  render() {
    return (
      <div className="app">
      <HeaderComponent/>
      <NavigationComponent/>
      {this.props.children}
      </div>
      /*<div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>*/
    )
  }
})

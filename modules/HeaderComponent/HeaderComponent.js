import React from 'react'

import styles from '../../public/style.css'

import ProfileImageComponent from '../ProfileImageComponent/ProfileImageComponent'

class HeaderComponent extends React.Component {

  render() {
    return <header className="header"><ProfileImageComponent/></header>

  }

}

export default HeaderComponent

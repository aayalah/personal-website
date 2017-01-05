import React from 'react'

import styles from '../../styles/style.css'

import ProfileImageComponent from '../../containers/ProfileImageComponent/ProfileImageComponent.jsx'

class HeaderComponent extends React.Component {

  render() {
    return <header className="header"><ProfileImageComponent/></header>

  }

}

export default HeaderComponent

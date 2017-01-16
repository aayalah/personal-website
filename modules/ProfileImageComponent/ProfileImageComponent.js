import React from 'react'

import styles from '../../public/style.css'


class ProfileImageComponent extends React.Component {

  render() {
    return <section className="imageSection">
            <div className="imageDiv"><img className="image" src="/headshot.jpg"/></div>
            <div> <h1 className="name">Alejandro Ayala-Hurtado </h1></div>
            <div> <h4 className="role">Software Engineer </h4></div>
            </section>

  }

}

export default ProfileImageComponent

import React from 'react'

import styles from '../../../public/style.css'

class NavigationComponent extends React.Component {



    _renderLinks(){
      console.log(this.props)
      return this.props.links.map((item, key)=>{
        let link = "#" + item
        return <li key={key}><a href={link}>{item}</a></li>
      })
    }


    render() {
      return <nav className="nav">
            <ul>
            {this._renderLinks()}
            </ul>
          </nav>
    }

}

export default NavigationComponent

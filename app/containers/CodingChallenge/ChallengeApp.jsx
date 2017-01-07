import React from 'react'
import {render} from 'react-dom'
import CurrencyExchange from './components/CurrencyExchange.jsx'




export default class ChallengeApp extends React.Component {


  render() {

    return <div className="app">
          <CurrencyExchange/>
          </div>
  }

}

"use strict";
import React from 'react'
import {render} from 'react-dom'
import CurrencyExchange from './components/CurrencyExchange.jsx'




const ChallengeApp = React.createClass ({


  render() {

    return <div className="app">
          <CurrencyExchange/>
          </div>
  }

});

export default ChallengeApp;

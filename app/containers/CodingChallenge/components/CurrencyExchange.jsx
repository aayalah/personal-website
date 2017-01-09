"use strict";
import React from 'react'

class CurrencyExchange extends React.Component {

  constructor(props) {
    super(props)
    this.state = {currencies: ""}
  }

  componentDidMount() {
   fetch('https://api.fixer.io/latest')
  .then((response) => response.json()).then((responseData) => this.setState({currencies: responseData["rates"]})).catch((error) => console.log("error"))
  }

  render() {
    return <div><h1>Currency Exchange</h1> <DataInput currencies={this.state.currencies}/></div>
  }
}


// https://api.fixer.io/latest
class DataInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {inputValue: "", currencySelected: "", displayList: false}
    this.inputIsChanged = this.inputIsChanged.bind(this)
    this.optionSelected = this.optionSelected.bind(this)
    this.displayCurrList = this.displayCurrList.bind(this)
  }

  inputIsChanged(e) {
    this.setState({inputValue: e.target.value})

  }

  optionSelected(e) {
    this.setState({currencySelected: e.target.value})
  }

  renderCurrencies() {

    return [<option key="0" value ={this.state.currencySelected}>{this.state.currencySelected}</option>, Object.keys(this.props.currencies).map((item, key) => <option key={key} value ={item}>{item}</option>)]

  }

  convertCurrency() {
    let type = this.state.currencySelected
    let intoEuros = this.state.inputValue/this.props.currencies[type]
    return intoEuros
  }

  displayCurrList() {
    this.setState({displayList: true})
  }

  createList() {
    let euros = this.convertCurrency()
    console.log(euros)
    return Object.keys(this.props.currencies).map((item, key) => <div key={key}> {euros * this.props.currencies[item] + " -> " + item} </div>)

  }

  render() {
    return <div>
      <input value={this.state.inputValue} onChange={this.inputIsChanged}/>
      <select value={this.state.currencySelected} onChange={this.optionSelected}>
        {this.renderCurrencies()}
      </select>
      <button onClick={this.displayCurrList}>Enter</button>
      {(this.state.displayList) ? this.createList() : ""}
      </div>
  }

}

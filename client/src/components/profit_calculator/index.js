import React, { Component } from 'react';
import './profit_calculator.css';
import axios from 'axios';

class ProfitCalculator extends Component {
  constructor(props){
    super(props)
    this.state = {
        currencies: ['ARS','USD'],
        banks: [],
        current_bank: {},
        current_amount: 0,
        current_currency: 'ARS',
        current_plans: [],
        current_plan: {},
        profit: 0,
        profit_percentage: 0
    }
  }

  componentDidMount() {
      axios.get('http://localhost:3001/api/v1/banks.json')
      .then(response => {
          this.setState({
              banks: response.data
          })
      })
      .catch(error => console.log(error))
  }

  onCurrencyChange = e => {
    this.setState({current_currency: e.target.value})
  }

  onBankChange = e => {
    let current_bank = this.state.banks.filter(bank => bank.id == e.target.value)[0]
    this.setState({ 
      current_bank, 
      current_plans: current_bank.fixed_deposit_plans,
      profit: 0,
      profit_percentage: 0,
      current_plan: {}
    })
  }
  onAmountChange = e => {
    this.setState({current_amount: e.target.value})
    this.recalculateProfit(this.state.current_plan.days, this.state.current_plan.percentage, e.target.value)
  }

  onPlanChange = e => {
    let current_plan = this.state.current_bank.fixed_deposit_plans.filter(plan => plan.id == e.target.value)[0]
    this.setState({current_plan: current_plan})
    this.recalculateProfit(current_plan.days, current_plan.percentage, this.state.current_amount)
  } 

  recalculateProfit(days, percentage, amount) {
    if (amount >= 1 && percentage && days) {
      let profit = parseInt(amount)*(percentage/10 * days/365)
      let profit_percentage = (profit*100)/amount
      this.setState({profit: profit.toFixed(3), profit_percentage: profit_percentage.toFixed(3)})
    }
  }

  render() {
    return (
      <div >
        <div className="ProfitCalculator">
          <select onChange={this.onBankChange} className='select'>
            {this.state.banks.map( bank => <option value={bank.id} key={bank.id}>{bank.name}</option>)}
          </select>
          <select className='select' onChange={this.onCurrencyChange}>
            {this.state.currencies.map( currency => <option value={currency} key={currency}>{currency}</option>)}
          </select>
          <select onChange={this.onPlanChange} className='select'>
            if (this.state.current_plans.length > 0) {
              this.state.current_plans.map( plan => <option value={plan.id} key={plan.id}>{plan.name} {plan.days} days</option>)  
            } else {
              <option>Seleccione un Plan</option>
            }
          </select>
          <input min={1} onChange={this.onAmountChange} type= 'number' placeholder='Monto'></input>
        </div>
        <div className='ProfitDisplay'>
          <p className='text-center'>Esta es su ganancia: {this.state.profit} {this.state.current_currency}</p>
          <p className='text-center'>Este es el porcentaje: {this.state.profit_percentage}%</p>
        </div>
      </div>
    
    );
  }
}

export default ProfitCalculator;
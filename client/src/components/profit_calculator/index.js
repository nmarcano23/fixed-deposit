import React, { Component } from 'react';
import './profit_calculator.css';
import axios from 'axios';

class ProfitCalculator extends Component {
  constructor(props){
    super(props)
    this.state = {
        currencies: ['ARS','USD'],
        banks: [],
        current_bank: null,
        current_amount: 0,
        current_currency: 'ARS',
        current_plans: [],
        current_plan: null,
        profit: null,
        profit_percentage: null
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
    let current_bank = this.state.banks.filter(bank => bank.id = this.state.current_bank)
    this.setState({ ...this.state, current_bank: current_bank, current_plans: current_bank.fixed_deposit_plans})
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
          <select className='select'>
            if (this.state.current_plans.length > 0) {
              this.state.current_plans.map( plan => <option value={plan.id} key={plan.id}>{plan.name}</option>)  
            } else {
              <option>Seleccione un Plan</option>
            }
          </select>
            <input type= 'number' placeholder='Monto'></input>
        </div>
        <div className='ProfitDisplay'>
          <p className='text-center'>Esta es su ganancia: {this.state.profit} {this.state.current_currency}</p>
          <p className='text-center'>Esta es el porcentaje: {this.state.profit_percentage} {this.state.current_currency}</p>
        </div>
      </div>
    
    );
  }
}

export default ProfitCalculator;
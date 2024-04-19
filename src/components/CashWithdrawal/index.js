// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }
  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }
  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div>
        <div>
          <div>
            <div>
              <p>{initial}</p>
            </div>
            <p>{name}</p>
          </div>
          <div>
            <p>Your Balance</p>
            <p>
              {balance}
              <br />
              <span>In Rupees</span>
            </p>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal

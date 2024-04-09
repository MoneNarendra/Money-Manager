import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactions: [],
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransection = id => {
    const {transactions} = this.state
    const filteredHistory = transactions.filter(
      eachTransection => eachTransection.id !== id,
    )

    this.setState({
      transactions: filteredHistory,
    })
  }

  addHistoryItem = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = typeOption
    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type: displayText,
    }

    this.setState(prevState => ({
      transactions: [...prevState.transactions, newHistory],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  titleOnChange = event => {
    this.setState({title: event.target.value})
  }

  amountOnChange = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  optionTypeOnChange = event => {
    this.setState({optionId: event.target.value})
  }

  getAmouts = () => {
    const {transactions} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactions.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return {balanceAmount, incomeAmount, expensesAmount}
  }

  render() {
    const {title, amount, optionId, transactions} = this.state

    const {balanceAmount, incomeAmount, expensesAmount} = this.getAmouts()

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="user-details">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="message">
              Welcome back to your
              <span className="app-name-msg"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            totalExpenses={expensesAmount}
            totalIncome={incomeAmount}
            balanceAmount={balanceAmount}
          />
          <div className="transection-history">
            <form
              className="addtransaction-container"
              onSubmit={this.addHistoryItem}
            >
              <h1 className="transection-history-heading">Add Transaction</h1>
              <label htmlFor="title" className="transection-label">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="transaction-input"
                placeholder="TITLE"
                value={title}
                onChange={this.titleOnChange}
              />
              <label htmlFor="amount" className="transection-label">
                Amount
              </label>
              <input
                id="amount"
                type="text"
                className="transaction-input"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.amountOnChange}
              />
              <label className="transection-label" htmlFor="type">
                TYPE
              </label>
              <select
                className="transaction-input"
                onChange={this.optionTypeOnChange}
                id="type"
                value={optionId}
              >
                {transactionTypeOptions.map(eachType => (
                  <option
                    key={eachType.optionId}
                    value={eachType.optionId}
                    className="option-ele"
                  >
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div className="history-container">
              <h1 className="transection-history-heading">History</h1>
              <ul className="history-items list-items-container">
                <li className="each-history-item" key={uuidv4()}>
                  <p className="history-text headings">Title</p>
                  <p className="history-text headings">Amount</p>
                  <p className="history-text headings">Type</p>
                </li>
                {transactions.map(eachTransection => (
                  <TransactionItem
                    eachTransection={eachTransection}
                    deleteTransection={this.deleteTransection}
                    key={eachTransection.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

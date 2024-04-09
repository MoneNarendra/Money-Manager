import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses, balanceAmount} = props

  return (
    <div className="money-details-list">
      <div className="each-money-item mony-con-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-imgs"
        />
        <div className="money-item-text">
          <p className="money-item-heading">Your Balance</p>
          <p className="money-item-money" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="each-money-item mony-con-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-imgs"
        />
        <div className="money-item-text">
          <p className="money-item-heading">Your Income</p>
          <p className="money-item-money" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="each-money-item mony-con-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-imgs"
        />
        <div className="money-item-text">
          <p className="money-item-heading">Your Expenses</p>
          <p className="money-item-money" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

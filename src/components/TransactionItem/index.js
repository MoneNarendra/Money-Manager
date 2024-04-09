import './index.css'

const TransactionItem = props => {
  const {eachTransection, deleteTransection} = props
  const {id, title, amount, type} = eachTransection
  const onDelete = () => {
    deleteTransection(id)
  }

  return (
    <li className="each-history-item">
      <p className="history-text">{title}</p>
      <p className="history-text">Rs {amount}</p>
      <p className="history-text">{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem

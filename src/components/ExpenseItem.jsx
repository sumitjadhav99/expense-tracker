import './ExpenseItem.css';

function ExpenseItem({ expense, deleteExpense, editExpense }) {
	return (
		<div className="expense-card">
			<div className="expense-info">
				<h3>{expense.title}</h3>

				<p>₹{expense.amount}</p>

				<span>{expense.category}</span>
			</div>

			<div className="expense-actions">
				<button className="delete-btn" onClick={() => deleteExpense(expense.id)}>Delete</button>
				<button className="edit-btn" onClick={() => editExpense(expense)}>Edit</button>
			</div>
		</div>
	);
}

export default ExpenseItem;

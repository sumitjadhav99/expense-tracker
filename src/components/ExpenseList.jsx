function ExpenseList({ expenses, deleteExpense, editExpense }) {
	return (
		<div>
			<h2>Expense List</h2>
			{expenses.map((expense) => (
				<div key={expense.id}>
					<p key={expense.id}>
						{expense.title} - ₹{expense.amount} {expense.category}
					</p>
					<button onClick={() => deleteExpense(expense.id)}>Delete</button>
					<button onClick={() => editExpense(expense)}>Edit</button>
				</div>
			))}
		</div>
	);
}

export default ExpenseList;

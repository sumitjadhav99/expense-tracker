import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, deleteExpense, editExpense }) {
	if (expenses.length === 0) {
		return <p>No expenses found</p>;
	}
	return (
		<div>
			<h2>Expense List</h2>

			{expenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					expense={expense}
					deleteExpense={deleteExpense}
					editExpense={editExpense}
				/>
			))}
		</div>
	);
}

export default ExpenseList;

import ExpenseItem from './ExpenseItem';
import "../App.css";

function ExpenseList({ expenses, deleteExpense, editExpense }) {
	if (expenses.length === 0) {
		return <p className="empty-state">No expenses found</p>;
	}
	return (
		<div>
			<h2 className="expense-list-title">Expense List</h2>

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

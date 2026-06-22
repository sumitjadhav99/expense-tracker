import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';

function App() {
	const [expenses, setExpenses] = useState(() => {
		const saved = localStorage.getItem('expenses');

		return saved ? JSON.parse(saved) : [];
	});

	const [editingExpense, setEditingExpense] = useState(null);

	const [searchTerm, setSearchTerm] = useState('');

	function addExpense(newExpense) {
		setExpenses([...expenses, newExpense]);
		setCategory("");
	}

	function deleteExpense(id) {
		const updatedExpenses = expenses.filter((expense) => {
			return expense.id !== id;
		});

		setExpenses(updatedExpenses);
	}

	useEffect(() => {
		localStorage.setItem('expenses', JSON.stringify(expenses));
	}, [expenses]);

	function editExpense(expense) {
		setEditingExpense(expense);
	}

	function updateExpense(updatedExpense) {
		const updatedExpenses = expenses.map((expense) => {
			if (expense.id === updatedExpense.id) {
				return updatedExpense;
			}

			return expense;
		});

		setExpenses(updatedExpenses);
		setEditingExpense(null);
	}

	const filteredExpenses = expenses.filter((expense) => {
		return expense.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<div>
			<h1>Expense Tracker</h1>
			<Summary expenses={expenses} />
			<ExpenseForm
				addExpense={addExpense}
				editingExpense={editingExpense}
				updateExpense={updateExpense}
			/>

			<input
				type="text"
				placeholder="Search expenses..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			<ExpenseList
				expenses={filteredExpenses}
				deleteExpense={deleteExpense}
				editExpense={editExpense}
			/>
		</div>
	);
}

export default App;

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

	const [selectedCategory, setSelectedCategory] = useState('');

	function addExpense(newExpense) {
		setExpenses([...expenses, newExpense]);
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
		return (
			expense.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedCategory === '' || expense.category === selectedCategory)
		);
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

			<select
				value={selectedCategory}
				onChange={(e) => setSelectedCategory(e.target.value)}>
				<option value="">All Categories</option>
				<option value="Food">Food</option>
				<option value="Travel">Travel</option>
				<option value="Shopping">Shopping</option>
				<option value="Bills">Bills</option>
			</select>

			<ExpenseList
				expenses={filteredExpenses}
				deleteExpense={deleteExpense}
				editExpense={editExpense}
			/>
		</div>
	);
}

export default App;

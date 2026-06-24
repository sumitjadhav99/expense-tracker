import { useEffect, useState } from 'react';

function ExpenseForm({ addExpense, editingExpense, updateExpense }) {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [category, setCategory] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		const newExpense = {
			id: editingExpense ? editingExpense.id : Date.now(),
			title: title,
			amount: Number(amount),
			category,
		};

		if (editingExpense) {
			updateExpense(newExpense);
		} else {
			addExpense(newExpense);
		}
		setTitle('');
		setAmount('');
		setCategory('');
	}

	useEffect(() => {
		if (editingExpense) {
			setTitle(editingExpense.title);
			setAmount(editingExpense.amount);
			setCategory(editingExpense.category);
		}
	}, [editingExpense]);

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Expense Name"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Amount"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<select
				value={category}
				onChange={(e) => setCategory(e.target.value)}>
				<option value="">Select Category</option>
				<option value="Food">Food</option>
				<option value="Travel">Travel</option>
				<option value="Shopping">Shopping</option>
				<option value="Bills">Bills</option>
			</select>
			<button type="submit">
				{editingExpense ? 'Update Expense' : 'Add Expense'}
			</button>
		</form>
	);
}

export default ExpenseForm;

import { useEffect, useState } from 'react';

function ExpenseForm({ addExpense, editingExpense, updateExpense }) {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		const newExpense = {
			id: editingExpense ? editingExpense.id : Date.now(),
			title: title,
			amount: Number(amount),
		};

		if (editingExpense) {
			updateExpense(newExpense);
		} else {
			addExpense(newExpense);
		}
		setTitle('');
		setAmount('');
	}

	useEffect(() => {
		if (editingExpense) {
			setTitle(editingExpense.title);
			setAmount(editingExpense.amount);
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
			<button type="submit">
				{editingExpense ? 'Update Expense' : 'Add Expense'}
			</button>
		</form>
	);
}

export default ExpenseForm;

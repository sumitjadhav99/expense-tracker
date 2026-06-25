import '../App.css';

function Summary({ expenses }) {
	const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
	return (
		<h2 className="total">
			Total: ₹<span>{total}</span>
		</h2>
	);
}

export default Summary;

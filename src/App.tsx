import { useState } from "react";
import Form from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
	const categoryList = ["Groceries", "Utilities", "Entertainment"];

	const [expenses, setExpenses] = useState([
		{ id: 1, description: "aaa", amount: 10, category: "Utilities" },
		{ id: 2, description: "bbb", amount: 10, category: "Utilities" },
		{ id: 3, description: "ccc", amount: 10, category: "Utilities" },
		{ id: 4, description: "ddd", amount: 10, category: "Utilities" },
	]);

	return (
		<div>
			<Form categorys={categoryList}></Form>
			<ExpenseList
				expense={expenses}
				onDelete={(id) =>
					setExpenses(expenses.filter((expense) => expense.id !== id))
				}
			/>
		</div>
	);
}

export default App;

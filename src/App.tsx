import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import Form from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
	const categoryList = ["Groceries", "Utilities", "Entertainment"];

	const [selectedCategory, setSelectedCategory] = useState("");

	const [expenses, setExpenses] = useState([
		{ id: 1, description: "aaa", amount: 10, category: "Utilities" },
		{ id: 2, description: "bbb", amount: 10, category: "Utilities" },
		{ id: 3, description: "ccc", amount: 10, category: "Utilities" },
		{ id: 4, description: "ddd", amount: 10, category: "Utilities" },
		{ id: 4, description: "ddd", amount: 10, category: "Groceries" },
	]);

	const visibleExpenses = selectedCategory
		? expenses.filter((expense) => expense.category === selectedCategory)
		: expenses;

	return (
		<div>
			<div className="mb-3">
				<Form categorys={categoryList}></Form>
			</div>
			<div className="mb-3">
				<ExpenseFilter
					onSelectCategory={(category) =>
						setSelectedCategory(category)
					}
				></ExpenseFilter>
			</div>
			<ExpenseList
				expense={visibleExpenses}
				onDelete={(id) =>
					setExpenses(expenses.filter((expense) => expense.id !== id))
				}
			/>
		</div>
	);
}

export default App;

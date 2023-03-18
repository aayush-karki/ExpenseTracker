import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import Form from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import categories from "./categories";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("");

	const [expenses, setExpenses] = useState([
		{
			id: 1,
			description: "electricity",
			amount: 10,
			category: "Utilities",
		},
		{ id: 2, description: "internet", amount: 10, category: "Utilities" },
		{ id: 3, description: "movie", amount: 5, category: "Entertainment" },
		{ id: 4, description: "rice", amount: 10, category: "Groceries" },
		{ id: 5, description: "chips", amount: 16, category: "Groceries" },
	]);

	const visibleExpenses = selectedCategory
		? expenses.filter((expense) => expense.category === selectedCategory)
		: expenses;

	return (
		<div>
			<div className="mb-5">
				<Form
					onFormSubmit={(expense) =>
						setExpenses([
							...expenses,
							{
								id: expenses.length + 1,
								description: expense.itemDescription,
								amount: expense.itemAmount,
								category: expense.itemCategory,
							},
						])
					}
				/>
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

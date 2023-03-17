import { useState } from "react";
import Form from "./components/ExpenseForm";

function App() {
	const categoryList = ["Groceries", "Utilities", "Entertainment"];

	return (
		<>
			<Form categorys={categoryList}></Form>
		</>
	);
}

export default App;

import categoryList from "../categories";

interface ExpenseFilterProps {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
	return (
		<select
			className="form-select"
			onChange={(event) => onSelectCategory(event.target.value)}
		>
			<option value="">All Category</option>
			{categoryList.map((category) => (
				<option value={category} key={category}>
					{category}
				</option>
			))}
		</select>
	);
};

export default ExpenseFilter;

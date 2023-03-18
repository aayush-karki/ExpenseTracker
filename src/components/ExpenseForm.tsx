import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categoryList from "../categories";

const schema = z.object({
	itemAmount: z
		.number({ invalid_type_error: "Amount feild is required" })
		.min(0.01, {
			message: "Item amount should be greater than or equal to 0.01",
		})
		.max(100_000, {
			message: "Item amount should be less than or equal to 100'000",
		}),
	itemCategory: z.enum(categoryList, {
		errorMap: () => ({ message: "Item category is required." }),
	}),
	itemDescription: z
		.string()
		.min(1, {
			message: "Item description should not be empty",
		})
		.max(100, "Item description should be less than 100 characters"),
});

interface Expense {
	description: string;
	amount: number;
	category: string;
}

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
	onFormSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onFormSubmit }: ExpenseFormProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	return (
		<form
			onSubmit={handleSubmit((data) => {
				onFormSubmit(data);
				reset();
			})}
		>
			<div className="mb-3">
				<label htmlFor="itemDescription" className="form-label">
					Description
				</label>
				<input
					{...register("itemDescription")}
					id="itemDescription"
					type="text"
					className="form-control"
				/>
				{errors.itemDescription && (
					<p className="text-danger">
						{errors.itemDescription.message}
					</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="itemAmount" className="form-label">
					Amount
				</label>
				<input
					{...register("itemAmount", { valueAsNumber: true })}
					id="itemAmount"
					type="number"
					className="form-control"
				/>
				{errors.itemAmount && (
					<p className="text-danger">{errors.itemAmount.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="itemCategory" className="form-label">
					Category
				</label>
				<select
					{...register("itemCategory")}
					name="itemCategory"
					id="itemCategory"
					className="form-select"
				>
					{categoryList.map((category) => (
						<option value={category} key={category}>
							{category}
						</option>
					))}
				</select>
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default ExpenseForm;

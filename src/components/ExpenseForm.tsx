import React from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { z } from "zod";
import { Schema, TypeOf } from "zod/lib";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	itemAmount: z
		.number({ invalid_type_error: "Amount feild is required" })
		.nonnegative(),
	itemCategory: z.string(),
	itemDescription: z.string().min(1, {
		message: "Item description should not be empty",
	}),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
	categorys: string[];
}

const ExpenseForm = ({ categorys }: ExpenseFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	const onFromSubmit = (data: FieldValues) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onFromSubmit)}>
			<div className="md-5">
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
			<div className="md-5">
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
			<div className="md-5">
				<label htmlFor="itemCategory" className="form-label">
					Category
				</label>
				<select
					{...register("itemCategory")}
					name="itemCategory"
					id="itemCategory"
					className="form-select"
				>
					{categorys.map((category, index) => (
						<option
							value={category}
							key={category}
							selected={index == 0 ? true : false}
						>
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

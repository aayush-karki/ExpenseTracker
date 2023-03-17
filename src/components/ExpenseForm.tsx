import React from "react";

interface ExpenseFormProc {
	categorys: string[];
}

const ExpenseForm = ({ categorys }: ExpenseFormProc) => {
	return (
		<form>
			<div className="md-5">
				<label htmlFor="item-description" className="form-label">
					Description
				</label>
				<input
					id="item-description"
					type="text"
					className="form-control"
				/>
			</div>
			<div className="md-5">
				<label htmlFor="item-amount" className="form-label">
					Amount
				</label>
				<input
					id="item-amount"
					type="number"
					className="form-control"
				/>
			</div>
			<div className="md-5">
				<label htmlFor="item-category" className="form-label">
					Category
				</label>
				<select
					name="item-category"
					id="item-category"
					className="form-control"
				>
					{categorys.map((category) => (
						<option value={category}>{category}</option>
					))}
				</select>
			</div>
		</form>
	);
};

export default ExpenseForm;

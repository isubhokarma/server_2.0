import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import NewFormField from "./NewFormField";

const FormReview = ({ onCancel, formValues }) => {
	const reviewFields = _.map(NewFormField, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div className="container">
			<h3>Form Review</h3>
			{reviewFields}
			<button
				type="submit"
				className="btn btn-warning text-light"
				onClick={onCancel}
			>
				Back
			</button>
			<button type="submit" className="btn btn-success">
				Submit
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.newForm.values };
}

export default connect(mapStateToProps)(FormReview);

import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import FormField from "./FormField";
import validateEmails from "../../utils/validateEmails";
import NewFormField from "./NewFormField";

class NewForm extends Component {
	renderFields() {
		return _.map(NewFormField, ({ label, name }) => {
			return (
				<Field
					component={FormField}
					key={name}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
					{this.renderFields()}
					<div className="container">
						<div className="row my-4">
							<div className="col-6 d-flex justify-content-center">
								<Link to="#" className="btn btn-danger">
									Cancel
								</Link>
							</div>
							<div className="col-6 d-flex justify-content-center">
								<button type="submit" className="btn btn-primary">
									<i className="fas fa-check" /> Next
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.emails || "");

	_.each(NewFormField, ({ name }) => {
		if (!values[name]) {
			errors[name] = "You must add a value";
		}
	});

	/*
	if (!values.title) {
		errors.title = 
	}

	if (!values.subject) {
		errors.subject = "You must add a subject";
	}

	if (!values.body) {
		errors.body = "You must add some message";
	}

	if (!values.emails) {
		errors.emails = "You must add an email-id";
	}
	*/

	return errors;
}

export default reduxForm({
	validate,
	form: "newForm",
	destroyOnUnmount: false
})(NewForm);

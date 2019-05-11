import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import FormField from "./FormField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
	{ label: "Form Title", name: "title" },
	{ label: "Subject Line", name: "subject" },
	{ label: "Email Body", name: "body" },
	{ label: "Recipient List", name: "emails" }
];

class NewForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
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
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderFields()}
					<div className="container">
						<div className="row my-4">
							<div className="col-6 d-flex justify-content-center">
								<Link to="#" className="btn btn-danger btn-lg">
									Cancel
								</Link>
							</div>
							<div className="col-6 d-flex justify-content-center">
								<button type="submit" className="btn btn-primary btn-lg">
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

	_.each(FIELDS, ({ name }) => {
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
	form: "newForm"
})(NewForm);

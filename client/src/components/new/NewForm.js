import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import FormField from "./FormField";

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
					<div className="container">
						<div className="row">{this.renderFields()}</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-6 d-flex justify-content-center">
								<Link to="#" className="btn btn-danger">
									Cancel
								</Link>
							</div>
							<div className="col-6 d-flex justify-content-center">
								<button type="submit" className="btn btn-primary">
									<i className="fas fa-check" /> Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: "newForm"
})(NewForm);

import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "./FormField";

class NewForm extends Component {
	renderFields() {
		return (
			<div>
				<Field type="text" name="title" component={FormField} />
			</div>
		);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<form
						onSubmit={this.props.handleSubmit(values => console.log(values))}
					>
						{this.renderFields()}
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default reduxForm({
	form: "newForm"
})(NewForm);

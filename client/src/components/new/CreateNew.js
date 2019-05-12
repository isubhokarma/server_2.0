import React, { Component } from "react";
import NewForm from "./NewForm";
import FormReview from "./FormReview";

class CreateNew extends Component {
	//init a component level state
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<FormReview onCancel={() => this.setState({ showFormReview: false })} />
			);
		}
		//else
		return (
			<NewForm onFormSubmit={() => this.setState({ showFormReview: true })} />
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default CreateNew;

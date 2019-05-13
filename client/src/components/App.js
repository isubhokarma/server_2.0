import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Navbar from "./Navbar";
import Base from "./Base";
import Dashboard from "./Dashboard";
import CreateNew from "./new/CreateNew";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Navbar />
						<Route exact path="/" component={Base} />
						<Route exact path="/activity" component={Dashboard} />
						<Route exact path="/new" component={CreateNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(App);

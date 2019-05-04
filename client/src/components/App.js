import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Navbar from "./Navbar";
const Dashboard = () => <h2>Dashboard</h2>;
const New = () => <h2>New</h2>;
const Base = () => <h2>Base</h2>;

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
						<Route exact path="/activity/new" component={New} />
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

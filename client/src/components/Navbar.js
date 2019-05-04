import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<a
						className="btn btn-primary col col-lg-2 pull-right"
						href="/auth/google"
						role="button"
					>
						<i className="fab fa-google" /> Login
					</a>
				);
			default:
				return "Logged In";
		}
	}

	render() {
		return (
			<nav>
				<div className="navbar navbar-expand-lg navbar-light bg-light">
					<a
						className="navbar-brand mb-0 h1 col col-lg-4 pull-left"
						href="localhost:3000"
					>
						Navbar
					</a>
					<div className="col" />
					<div>{this.renderContent()}</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Navbar);

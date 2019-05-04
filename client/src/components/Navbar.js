import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<a
						className="btn btn-outline-primary pull-right"
						href="/auth/google"
						role="button"
					>
						<i className="fab fa-google" /> Login
					</a>
				);
			default:
				return (
					<a
						className="btn btn-outline-primary btn-sm pull-right"
						href="/api/logout"
						role="button"
					>
						Logout
					</a>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="navbar navbar-expand-lg navbar-light bg-light">
					<Link
						to={this.props.auth ? "/activity" : "/"}
						className="navbar-brand mb-0 h1 col col-lg-4 pull-left"
						href="localhost:3000"
					>
						Navbar
					</Link>
					<div className="col" />
					<div className="col col-lg-2">{this.renderContent()}</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Navbar);

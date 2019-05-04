import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav>
				<div className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand mb-0 h1 col col-lg-4 pull-left" href="#">
						Navbar
					</a>
					<div className="col" />
					<button
						type="button"
						className="btn btn-outline-primary col col-lg-2 pull-right"
					>
						<i class="fab fa-google" /> Login
					</button>
				</div>
			</nav>
		);
	}
}

export default Navbar;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-9">
						<h1 className="display-1">Recent</h1>
					</div>
					<div className="col-3">
						<Link
							className="btn btn-primary my-5"
							to={this.props.auth ? "/new" : "/"}
							role="button"
						>
							<i class="fas fa-plus" /> Create New
						</Link>
					</div>
				</div>
				<div className="row">
					<div className="col-5">
						<label className="sr-only" htmlFor="inlineFormInputGroupSearch" />
						<div className="input-group my-2">
							<div class="input-group-prepend">
								<div class="input-group-text">
									<i class="fas fa-search" />
								</div>
							</div>
							<input
								type="text"
								className="form-control"
								id="inlineFormInputGroupSearch"
								placeholder="Customer Number"
							/>
						</div>
						<div className="my-2">
							<button type="submit" className="btn btn-info">
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Dashboard);

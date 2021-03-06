import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends PureComponent {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <button
            className="btn btn-warning pull-right text-light btn-sm"
            type="button"
            disabled
          >
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            />
            Verifying User
          </button>
        );
      case false:
        return (
          <a
            className="btn btn-primary pull-right btn-sm"
            href="/auth/google"
            role="button"
          >
            <i className="fab fa-google" /> Login
          </a>
        );
      default:
        return (
          <a
            className="btn btn-danger pull-right btn-sm"
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
        <div
          className="navbar navbar-expand-lg navbar-dark bg-dark shadow
          p-3 mb-5 rounded-bottom"
        >
          <div className="container">
            <Link
              to={this.props.auth ? "/activity" : "/"}
              className="navbar-brand mb-0 pull-left"
            >
              Navbar
            </Link>
            {this.renderContent()}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);

import React, { PureComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Navbar from "./Navbar";
import Base from "./Base";
import Dashboard from "./Dashboard";
import NewSalesEntry from "./NewSalesEntry";
import NewEnquiryEntry from "./NewEnquiryEntry";

class App extends PureComponent {
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
            <Route
              exact
              path="/new_enquiry_entry"
              component={NewEnquiryEntry}
            />
            <Route exact path="/new_sales_entry" component={NewSalesEntry} />
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

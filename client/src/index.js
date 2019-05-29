import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import * as serviceWorker from "./serviceWorker";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// first arg created a dummy reducer and appointed to the store
// just to get started with redux
// the second arg initial state of the application, most relevant
// on server side render
// and third arg apply middleware

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// pass the app component through the provider tag calling the store as a prop

serviceWorker.unregister();

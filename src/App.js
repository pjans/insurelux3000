import React from "react";
import "./App.css";
import { Main, Policies, AddPolicy } from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./shared/NavBar";
import { connect } from "react-redux";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Main} />
      <Route path="/policies/" component={Policies} />
      <Route path="/add-policy/" component={AddPolicy} />
    </Router>
  );
}

const mapStateToProps = (state, ownProps) => ({ brands: "brandy ze stora" });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

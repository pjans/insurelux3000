import React from "react";
import "./App.css";
import { Main, Policies, AddPolicy } from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./shared/NavBar";

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

export default App;
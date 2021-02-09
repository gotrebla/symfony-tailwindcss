import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Loading from "./Loading";
import Option1 from "./Option1";
import Option2 from "./Option2";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="bg-blue-100">
                        <NavLink className="bg-red-100" to="/">Root</NavLink>
                        <NavLink className="bg-green-200" to="/option1">Option1</NavLink>
                        <NavLink to="/option2">Option2</NavLink>
                    </ul>
                    <Switch>
                        <Route path="/option1" component={Option1}/>
                        <Route path="/option2" component={Option2}/>
                        <Route path="/" component={Loading}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default Routing;
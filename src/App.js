import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Layout } from 'antd';
import Home from "./components/Home";
import LoginForm from "./pages/LoginForm";
import About from "./components/authComponents/About";
import NavigationBar from "./components/authComponents/NavigationBar";
import PrivateRoute from "./components/authComponents/PrivateRoute";

const App = (props) => {
    return (
        <Router>
            <div>
                <Layout>
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/account/login" component={LoginForm} />
                        <PrivateRoute path="/about" component={About} />
                    </Switch>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
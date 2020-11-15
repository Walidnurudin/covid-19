import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import News from './news';
import About from './about';
import Nomatch from './nomatch';

class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/about" component={About} />
                        <Route component={Nomatch} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;

import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';

import Navbar from './layout/navbar/Navbar';
import HomePage from './home/home-page/HomePage';
import ContactsPage from './contacts/contacts-page/ContactsPage';

let history = createHistory();

// this is in order to make sure the app goes to the top 
// of the page when you go to a new page
history.listen((location, action) => window.scrollTo(0, 0));

const App = () => (

    <div className="App">
        <Router history={history}>
            <div>
                <Navbar />
                <div id='page-wrapper'>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/contacts' component={ContactsPage} />

                    </Switch>
                </div>
            </div>
        </Router>
    </div>
);

export default App;

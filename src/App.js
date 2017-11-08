import React, { Component } from 'react';
import './App.css';

import ContactService from './services/ContactService';

// layout
import Navbar from './layout/navbar/Navbar';

class App extends Component{

    componentWillMount() {
        ContactService.get_contacts()
            .then(contacts => console.error(contacts));
    }

    render() {
        return (
            <div className="App">
                <Navbar />
            </div>
        );
    }
}

export default App;

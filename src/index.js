import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import setUpStore from './set-up-store';
import { load_contacts } from './actions/contact-actions';

let store = setUpStore();
store.dispatch(load_contacts());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

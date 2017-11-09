import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import root_reducer from './reducers/index';

let store = createStore(root_reducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

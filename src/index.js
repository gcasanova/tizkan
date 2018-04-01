import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import registerServiceWorker from './registerServiceWorker';

// CUSTOM IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

ReactDOM.render(<Navbar />, document.getElementById('root'));
registerServiceWorker();

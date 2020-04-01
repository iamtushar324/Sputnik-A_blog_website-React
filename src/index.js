import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/base/base.scss';
import Home from './Container/Home'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MaterialIcon from 'material-icons-react';

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

// Main page
import App from './App';

// Styles
import './index.sass';

// Service worker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

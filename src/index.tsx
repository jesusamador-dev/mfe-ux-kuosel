import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './service-worker';

ReactDOM.render(<App />, document.getElementById('root'));

// Registrar el service worker para que tu aplicación funcione como una PWA
serviceWorker.register();

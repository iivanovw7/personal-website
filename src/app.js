/**
 * Module contains application entry point.
 * @module app
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/css/sanitize.css';

import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import { runningMode } from './config';
import { addIntlPolyfills, translationMessages } from './locale';
import LocaleProvider from './ui/components/LocaleProvider';
import ThemeProvider from './ui/components/ThemeProvider';
import App from './ui/containers/App';
import history from './ui/routes/history';
import configureStore from './ui/store/configureStore';
import { registerServiceWorker } from './utils/register-service-worker';
import { reportWebVitals } from './utils/report-web-vitals';

const store = configureStore({}, history);
const MOUNT_NODE = document.getElementById('pw-app');

addIntlPolyfills();

const render = (messages) => {
    ReactDOM.render(
        // eslint-disable-next-line react/jsx-filename-extension
        <React.StrictMode>
            <Provider store={store}>
                <LocaleProvider messages={messages}>
                    <ConnectedRouter history={history}>
                        <ThemeProvider>
                            <HelmetProvider>
                                <App />
                            </HelmetProvider>
                        </ThemeProvider>
                    </ConnectedRouter>
                </LocaleProvider>
            </Provider>
        </React.StrictMode>,
        MOUNT_NODE,
    );
};

render(translationMessages);

module.hot.accept();

if (module.hot) {
    // Webpack hot reloading
    module.hot.accept();
}

if (runningMode === 'production') {
    registerServiceWorker();
} else {
    // eslint-disable-next-line global-require
    require('../assets/css/critical.css');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

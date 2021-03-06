/**
 * Module contains main application setup
 * @module ui/containers/App
 * @author Igor Ivanov
 */
import { ApolloProvider } from '@apollo/client';
import { compose } from '@reduxjs/toolkit';
import * as PropTypes from 'prop-types';
import React, { memo, ReactElement, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet-async';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { logLevelMap } from '../../../config/constants';
import { getText } from '../../../locale';
import Logger from '../../../log';
import { client } from '../../../service/graphcms/apolloClient';
import LocaleSwitch from '../../components/LocaleSwitch';
import ScrollTop from '../../components/ScrollTop';
import ThemeSwitch from '../../components/ThemeSwitch';
import TopBar from '../../components/TopBar';
import Loader from '../../elements/Loader';
import { isHomePath, routes as routesPaths } from '../../routes';
import appHistory from '../../routes/history';
import GlobalStyle from '../../styles/global';
import NotFoundPage from '../NotFoundPage';
import PostComponent from '../Post';
import Posts from '../Posts';

import ErrorFallback from './ErrorFallback';
import { completeWait, startWait, stopWait } from './model';
import messages from './model/messages';
import { makeSelectApp, selectLocation } from './model/selectors';
import { hideWaitScreen, showWaitScreen } from './model/util';
import Section from './Section';

const logger = Logger.getInstance();

/**
 * Main application component.
 * Contains router setup and global styles connection.
 * @method
 * @param {Object.<module:ui/containers/App~propTypes>} props
 *  contains component props
 *  @see {@link module:containers/App~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function App(props: PropTypes.InferProps<typeof App.propTypes>): ReactElement<JSX.Element> {
    const { wait, loading, location: appLocation } = props;
    const { defaultTitle, defaultDescription } = messages;

    useEffect(() => {
        // Temporarily: redirects from home path to posts.
        if (isHomePath(appLocation.pathname)) {
            appHistory.push(routesPaths.posts);
        }
    }, []);

    useEffect(() => {
        if (wait) {
            showWaitScreen();
        }
        else {
            hideWaitScreen();
        }
    }, [wait]);

    /**
     * App error handler.
     * @param {Error} error - app Error object.
     * @param {string} info - string represents componentStack.
     */
    function handleError(error: Error, info): void {
        logger.send({
            type: logLevelMap.ERROR,
            message: `Application error: ${ error.stack || '' }, componentStack: ${ String(info) }`,
        });
    }

    return (
        <ErrorBoundary FallbackComponent={ ErrorFallback } onError={ handleError }>
            <ApolloProvider client={ client }>
                <Helmet titleTemplate="%s" defaultTitle={ getText(defaultTitle, props) }>
                    <meta name="description" content={ getText(defaultDescription, props) } />
                </Helmet>
                <Loader hide={ ! loading } />
                <TopBar>
                    <ThemeSwitch />
                    <LocaleSwitch />
                </TopBar>
                <Section>
                    <Switch>
                        <Route exact path={ routesPaths.home } component={ Posts } />
                        <Route exact path={ routesPaths.posts } component={ Posts } />
                        <Route path={ routesPaths.post } component={ PostComponent } />
                        <Route component={ NotFoundPage } />
                    </Switch>
                    <GlobalStyle />
                    <ScrollTop />
                </Section>
            </ApolloProvider>
        </ErrorBoundary>
    );
}

/**
 * @name App.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {Object} props.intl - react-intl object provides access  to localization methods.
 * @return {Array} React propTypes
 */
App.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    intl: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    location: PropTypes.any.isRequired,
    wait: PropTypes.bool.isRequired,
};

App.defaultProps = {};

/**
 * Function selects parts of the state required in component.
 * @method
 * @param {Object} state
 *    Object contains application state.
 * @see {@link module:containers/Landing/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = (state) => {
    const { wait, loading } = makeSelectApp(state);

    return {
        wait,
        loading,
        location: selectLocation(state),
    };
};

/**
 * Function mapping dispatch to props.
 * Dispatching action which may cause change of application state.
 * @func mapDispatchToProps
 * @param {Function} dispatch method.
 * @return {Object} redux container
 */
export function mapDispatchToProps(dispatch) { // eslint-disable-line
    return {
        onStartWait: () => dispatch(startWait), // eslint-disable-line
        onStopWait: () => dispatch(stopWait), // eslint-disable-line
        onCompleteWait: () => dispatch(completeWait), // eslint-disable-line
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, injectIntl, memo)(App);

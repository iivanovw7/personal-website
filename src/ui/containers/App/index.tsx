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
import ThemeSwitch from '../../components/ThemeSwitch';
import TopBar from '../../components/TopBar';
import { routes as routesPaths } from '../../routes';
import history from '../../routes/history';
import GlobalStyle from '../../styles/global';
import NotFoundPage from '../NotFoundPage';
import Posts from '../Posts';

import ErrorFallback from './ErrorFallback';
import { startWait, stopWait, completeWait } from './model';
import messages from './model/messages';
import { makeSelectApp } from './model/selectors';
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
    const { wait } = props;
    const { defaultTitle, defaultDescription } = messages;

    useEffect(() => {
        history.push(routesPaths.posts);
    }, []);

    useEffect(() => {
        if (wait) {
            showWaitScreen();
        } else {
            hideWaitScreen();
        }
    }, [wait]);

    /**
     * App error handler.
     * @param {Error} error - app Error object.
     * @param {string} info - string represents componentStack.
     */
    function handleError(error, info): void {
        logger.send({
            type: logLevelMap.ERROR,
            message: `Application error: ${error}, componentStack: ${info}`,
        });
    }

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
            <ApolloProvider
                // @ts-ignore
                client={client}>
                <Helmet titleTemplate="%s" defaultTitle={getText(defaultTitle, props)}>
                    <meta name="description" content={getText(defaultDescription, props)} />
                </Helmet>
                <TopBar>
                    <ThemeSwitch />
                    <LocaleSwitch />
                </TopBar>
                <Section>
                    <Switch>
                        <Route exact path={routesPaths.base} component={Posts} />
                        <Route exact path={routesPaths.posts} component={Posts} />
                        <Route exact path={routesPaths.postsSearch} component={Posts} />
                        <Route component={NotFoundPage} />
                    </Switch>
                    <GlobalStyle />
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
    const { wait } = makeSelectApp(state);

    return {
        wait,
    };
};

/**
 * Function mapping dispatch to props.
 * Dispatching action which may cause change of application state.
 * @func mapDispatchToProps
 * @param {Function} dispatch method.
 * @return {Object} redux container
 */
export function mapDispatchToProps(dispatch) {
    return {
        onStartWait: () => dispatch(startWait),
        onStopWait: () => dispatch(stopWait),
        onCompleteWait: () => dispatch(completeWait),
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, injectIntl, memo)(App);

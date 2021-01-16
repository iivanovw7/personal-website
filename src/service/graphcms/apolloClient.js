/**
 * Module contains graphql configuration.
 * @module service/graphcms/apolloClient
 * @author Igor Ivanov
 */
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import settings, { runningMode } from '../../config';

const fetchOptions = {
    credentials: 'include',
};

if (runningMode === 'development') {
    fetchOptions.mode = 'no-cors';
}

// eslint-disable-next-line import/prefer-default-export
export const client = new ApolloClient({
    uri: settings.net.graphCmsUrl,
    cache: new InMemoryCache(),
    fetchOptions,
});

/**
 * Module contains graphql configuration.
 * @module service/graphcms/apolloClient
 * @author Igor Ivanov
 */
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import settings, { runningMode } from '../../config';

type FetchOptions = {
    credentials?: string,
    mode?: string
};

const fetchOptions: FetchOptions = {
    credentials: 'include',
};

if (runningMode === 'development') {
    fetchOptions.mode = 'no-cors';
}

export const client: ApolloClient<unknown> = new ApolloClient({
    uri: settings.net.graphCmsUrl,
    // @ts-ignore eslint-disable-line
    cache: new InMemoryCache(),
    fetchOptions,
});

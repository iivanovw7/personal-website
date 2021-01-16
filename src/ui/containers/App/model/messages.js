/**
 * Module contains App messages.
 * @module ui/containers/App/model/messages
 */
import { defineMessages } from 'react-intl';

/**
 * Messages id prefix.
 * @constant {string}
 */
export const scope = 'pw.common';

/**
 * Contains messages set for react component.
 * @return {Function} defines messages set.
 */
export default defineMessages({
    errorMessage: {
        id: `${scope}.error`,
        defaultMessage: 'Error',
    },
    reloadText: {
        id: `${scope}.reload`,
        defaultMessage: 'Reload',
    },
    defaultTitle: {
        id: `${scope}.defaultTitle`,
        defaultMessage: 'Igor Ivanov',
    },
    defaultDescription: {
        id: `${scope}.defaultDescription`,
        defaultMessage: 'personal web application',
    },
});

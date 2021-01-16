/**
 * Module contains NotFoundPage Messages.
 * @module ui/containers/NotFoundPage/model/messages
 */
import { defineMessages } from 'react-intl';

/**
 * Messages id prefix.
 * @constant {string}
 */
export const scope = 'pw.common.notFoundPage';

/**
 * Contains messages set for react component.
 * @return {Function} defines messages set.
 */
export default defineMessages({
    header: {
        id: `${scope}.header`,
        defaultMessage: 'Page not found',
    },
});

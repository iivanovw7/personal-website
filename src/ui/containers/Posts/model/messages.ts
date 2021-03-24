/**
 * Module contains Posts Messages.
 * @module ui/containers/Posts/model/messages
 */
import { defineMessages } from 'react-intl';

/**
 * Messages id prefix.
 * @constant {string}
 */
export const scope = 'pw.common.posts';

/**
 * Contains messages set for react component.
 * @return {Function} defines messages set.
 */
export default defineMessages({
    searchTitle: {
        id: `${scope}.searchTitle`,
        defaultMessage: 'Search'
    },
    searchByTags: {
        id: `${scope}.searchByTags`,
        defaultMessage: 'Search by tags: '
    },
    searchBySubject: {
        id: `${scope}.searchBySubject`,
        defaultMessage: 'Search by subject or title: '
    }
});

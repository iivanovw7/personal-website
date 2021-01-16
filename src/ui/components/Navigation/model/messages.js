/**
 * Module contains Navigation messages.
 * @module components/Navigation/model/messages
 */
import { defineMessages } from 'react-intl';

/**
 * Messages id prefix.
 * @constant {string}
 */
export const scope = 'pw.navigation';

/**
 * Contains messages set for react component.
 * @return {Function} defines messages set.
 */
export default defineMessages({
    base: {
        id: `${scope}.base`,
        defaultMessage: 'Home',
    },
    posts: {
        id: `${scope}.posts`,
        defaultMessage: 'Posts',
    },
});

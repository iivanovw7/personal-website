/**
 * Module contains Post Messages.
 * @module ui/containers/NotFoundPage/model/messages
 */
import { defineMessages } from 'react-intl';

/**
 * Messages id prefix.
 * @constant {string}
 */
export const scope = 'pw.common.post';

/**
 * Contains messages set for react component.
 * @return {Function} defines messages set.
 */
export default defineMessages({
    readingTime: {
        id: `${scope}.readingTime`,
        defaultMessage: 'Reading time: <span>{ minutes, plural, =0{less than a minute} one{1 minute} other{# minutes} }</span>',
    },
    publishedAt: {
        id: `${scope}.publishedAt`,
        defaultMessage: 'Published: '
    }
});

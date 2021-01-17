/**
 * Module contains default error messages.
 * @module ui/components/ErrorMessage/model/messages
 */
import { defineMessages } from 'react-intl';

/**
 * Messages id prefix.
 * @constant {string}
 */
export const scope = 'pw.error-message';

/**
 * Contains messages set for react component.
 * @return {Function} defines messages set.
 */
export default defineMessages({
    errorMessageTitle: {
        id: `${scope}.errorGeneralTitle`,
        defaultMessage: 'Error',
    },
    errorMessageText: {
        id: `${scope}.errorGeneralText`,
        defaultMessage: 'Unknown error',
    },
    errorMessageButtonText: {
        id: `${scope}.errorMessageButton`,
        defaultMessage: 'Refresh',
    },
});

/**
 * Module contains Error message.
 * @module ui/containers/App/ErrorFallback
 */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import Link from '../../elements/Link';

import messages from './model/messages';

const { errorMessage, reloadText } = messages;

/**
 * Reloads browser page
 * @param {SyntheticEvent | Event} eventData
 *  event data
 */
function handleReloadClick(eventData) {
    eventData.preventDefault();
    eventData.stopPropagation();
    location.reload();
}

/**
 * App error fallback message.
 * @method
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function ErrorFallback() {
    return (
        <div>
            <FormattedMessage id={errorMessage.id} defaultMessage={errorMessage.defaultMessage} />
            <Link href="/" target="_self" onClick={handleReloadClick} variant="secondary">
                <FormattedMessage id={reloadText.id} defaultMessage={reloadText.defaultMessage} />
            </Link>
        </div>
    );
}

export default memo(ErrorFallback);

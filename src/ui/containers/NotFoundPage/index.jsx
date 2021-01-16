/**
 * Module contains Page not fount component.
 * @module ui/containers/NotFoundPage
 */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '../../elements/H1';

import messages from './model/messages';

/**
 * Creates PageNotFound component.
 * @method
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function NotFoundPage() {
    const { header } = messages;

    return (
        <article>
            <H1>
                <FormattedMessage id={header.id} defaultMessage={header.defaultMessage} />
            </H1>
        </article>
    );
}

export default memo(NotFoundPage);

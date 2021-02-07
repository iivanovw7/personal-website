/**
 * Module contains message component.
 * @module ui/components/ErrorMessage
 * @author Igor Ivanov
 */
import { compose } from '@reduxjs/toolkit';
import React, { memo, ReactNode } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { getText } from '../../../locale';
import H3 from '../../elements/H3';

import Container from './Container';
import HeaderStyles from './HeaderStyles';
import messages from './model/messages';
import Paragraph from './Paragraph';


const { errorMessageTitle, errorMessageText } = messages;

export interface ErrorMessageProps {
    title?: string;
    message?: string;
}

/**
 * Error message component.
 * @method
 * @param {ErrorMessageProps} props
 *      component pros.
 * @return {ReactNode} React component with children.
 * @constructor
 */
function ErrorMessage(props: ErrorMessageProps): ReactNode {
    const { title = getText(errorMessageTitle, props), message = getText(errorMessageText, props) } = props;

    return (
        <Container>
            <H3 styling={HeaderStyles}>{title}</H3>
            <Paragraph>{message}</Paragraph>
        </Container>
    );
}

const withConnect = connect(null, null);

export default compose(withConnect, injectIntl, memo)(ErrorMessage);

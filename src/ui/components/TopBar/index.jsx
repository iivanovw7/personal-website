/**
 * Module contains application top bar.
 * @module ui/components/TopBar
 * @author Igor Ivanov
 */
import { compose } from '@reduxjs/toolkit';
import * as PropTypes from 'prop-types';
import React, { Children, memo } from 'react';
import { injectIntl } from 'react-intl';

import config from '../../../config';
import useMedia from '../../../utils/hooks/useMedia';
import { basePath } from '../../routes';
import { breakpoints } from '../../styles/settings';
import NavLinks from '../Navigation/NavLinks';

import Block from './Block';
import Container from './Container';
import SocialButtons from './SocialButtons';

/**
 * Creates TopBar component.
 * @name Components/TopBar
 * @method
 *
 * @param {Object.<module:ui/components/TopBar~propTypes>} props
 *  contains component props
 *  @see {@link module:components/TopBar~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function TopBar(props) {
    const { children, intl } = props;

    /**
     * Determines if navigation component should be displayed.
     * @type {boolean}
     */
    const showNavigation = useMedia(
        // Media queries
        [`(min-width: ${breakpoints.sm}px)`],
        [true],
        false,
    );

    return (
        <Container>
            <Block>
                <SocialButtons social={config.social} />
            </Block>
            {showNavigation && (
                <Block>
                    <NavLinks routes={basePath} intl={intl} />
                </Block>
            )}
            <Block>{Children.toArray(children)}</Block>
        </Container>
    );
}

/**
 * @name TopBar.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {Object} props.intl - react-intl object provides access to localization methods.
 * @property {Array.<Function | Node> | Function | Node} props.children - TopBar children elements.
 * @return {Array} React propTypes
 */
TopBar.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    intl: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
    ]),
};

export default compose(injectIntl, memo)(TopBar);

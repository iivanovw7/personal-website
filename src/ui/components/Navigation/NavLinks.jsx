/**
 * Module contains navigation links.
 * @module components/Navigation/NavLinkStyles
 * @author Igor Ivanov
 */
import { map, pipe, pickBy, toPairs } from 'ramda';
import React from 'react';

import { getText } from '../../../locale';
import { isNotEmptyString } from '../../../utils/helpers';
import NavLink from '../../elements/NavLink';

import messages from './model/messages';
import NavLinkStyles from './NavLinkStyles';

/**
 * Creates navigation link component with localized title.
 * @param {Array.<[string, string]>} item - array that contains path title and path strings.
 * @param {Object} intl - react-intl object provides access to localization methods.
 * @return {JSX.Element} returns navigation link.
 * @constructor
 */
const NavLinkComponent = (item, intl) => (
    <NavLink
        exact={false}
        variant="primary"
        key={item[0]}
        styling={NavLinkStyles}
        link={item[1]}
        text={getText(messages[item[0]], { intl })}
    />
);

/**
 * Collects not empty path key/value pairs and returns them in pairs.
 * @method
 * @return {Array.<Array.<[string, string]>>}
 *      list of keys and values, key represents path and value represents link address.
 */
const NavigationOptions = pipe(pickBy(isNotEmptyString), toPairs);

/**
 * Creates list of navigation links.
 * @param {Object} routes - object represents collection of main application paths.
 *      @see {@link module:ui/routes}
 * @param {Object} intl - react-intl object provides access to localization methods.
 * @return {JSX.Element[]} list of navigation links.
 */
const mapNavItems = ({ routes, intl }) => { // eslint-disable-line arrow-body-style
    // eslint-disable-next-line new-cap
    return map((item) => NavLinkComponent(item, intl), NavigationOptions(routes));
};

// eslint-disable-next-line arrow-body-style
export default pipe((props) => ({ routes: props.routes, intl: props.intl }), mapNavItems);

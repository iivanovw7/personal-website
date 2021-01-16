/**
 * Module contains social buttons.
 * @module ui/components/SocialButtons
 * @author Igor Ivanov
 */
import { compose, map, pipe, prop, pickBy, toPairs } from 'ramda';
import React from 'react';

import { isNotEmptyString } from '../../../utils/helpers';
import Button from '../../elements/Button';
import Icon from '../../elements/Icon';

import SocialButtonStyles from './SocialButtonStyles';

/**
 * Collects not empty social key/value pairs and returns them in pairs.
 * @method
 * @return {Array<[string, string]>}
 *      list of keys and values, key represents icon filename and value represents social link.
 */
const SocialOptions = pipe(prop('social'), pickBy(isNotEmptyString), toPairs);

/**
 * Single social button component.
 * @param {Array.<string, string>} el is list that contains social network title and account link.
 * @return {JSX.Element} returns social button with appropriate svg icon.
 * @constructor
 */
const SocialButtonElement = (el) => (
    <Button variant="primary" key={el[0]} href={el[1]} target="_self" styling={SocialButtonStyles}>
        <Icon path={`social/${el[0]}`} />
    </Button>
);

export default compose(map(SocialButtonElement), SocialOptions);

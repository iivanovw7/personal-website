/**
 * Module contains switch component
 * @module ui/elements/Switch
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React, { memo, ReactElement } from 'react';

import Checkbox from './Checkbox';
import Container from './Container';
import Handle from './Handle';
import Wrapper from './Wrapper';

/**
 * Creates switch component.
 * @name elements/Switch
 * @method
 * @param {Object.<module:ui/elements/Switch~propTypes>} props
 *  contains component props
 *  @see {@link module:elements/Switch~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
function Switch(props: PropTypes.InferProps<typeof Switch.propTypes>): ReactElement<JSX.Element> {
    const { onChange, checked, themeSwitch, variant, styling, checkedImg, uncheckedImg } = props;

    return (
        <Wrapper variant={variant} styling={styling}>
            <Checkbox onChange={onChange} checked={checked} />
            <Handle variant={variant} />
            <Container
                id="switchImgContainer"
                themeSwitch={themeSwitch}
                // prettier-ignore
                image={checked
                    ? checkedImg
                    : uncheckedImg
                }
                checked={checked}
            />
        </Wrapper>
    );
}

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {boolean} props.checked - if switch is enabled.
 * @property {function} props.onChange - switch handler.
 * @property {boolean} [props.themeSwitch = false] - flag defines theme switch.
 * @property {Array.<string>} [props.styling = []] - image additional styles.
 * @property {Array.<string>} [props.variant = 'primary'] - styles variant option.
 * @property {string} [props.checkedImg = null]
 *      if passed will be used as background image for checked state.
 * @property {string} [props.uncheckedImg = null]
 *      if passed will be used as background image for unchecked state.
 * @return {Array} React propTypes
 */
Switch.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    themeSwitch: PropTypes.bool,
    styling: PropTypes.array,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    checkedImg: PropTypes.string,
    uncheckedImg: PropTypes.string,
};

Switch.defaultProps = {
    themeSwitch: false,
    variant: 'primary',
    checkedImg: null,
    uncheckedImg: null,
};

export default memo(Switch);

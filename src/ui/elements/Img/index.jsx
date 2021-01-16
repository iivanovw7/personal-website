/**
 * Module renders an image with parameters
 * @module ui/elements/Img
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const StyledImg = styled.img`
    ${(props) => props.styling};
`;

/**
 * Creates image component.
 * @name elements/Img
 * @method
 * @param {Object.<module:ui/elements/Img~propTypes>} props
 *  contains component props
 *  @see {@link module:elements/Img~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
const Img = ({ src, alt, id, styling, onClick, handleLoad, className }) => (
    <StyledImg
        src={src}
        alt={alt}
        data-id={id}
        onLoad={handleLoad}
        onClick={onClick}
        styling={styling}
        className={className}
    />
);

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string | Object} props.src - image src.
 * @property {string} props.alt - alt string.
 * @property {string} props.id - id string.
 * @property {string} [props.className = ''] - className string.
 * @property {Array.<string>} [props.styling = []] - image additional styles.
 * @return {Array} React propTypes
 */
Img.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    alt: PropTypes.string.isRequired,
    styling: PropTypes.array,
    className: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleLoad: PropTypes.func,
    onClick: PropTypes.func,
};

Img.defaultProps = {
    styling: [],
    className: '',
};

export default Img;

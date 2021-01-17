/**
 * Module contains SVG icon component.
 * @module ui/elements/Icon
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React, { memo, ReactElement, useEffect } from 'react';

interface ImportedIconInterface extends React.FC<React.SVGProps<SVGSVGElement>> {
    path: string;
    fill?: string;
}

/**
 * Dynamically loads icon from assets.
 * @name elements/Icon
 * @method
 * @param {Object.<module:ui/elements/Icon~propTypes>} props
 *  contains component props
 *  @see {@link module:elements/Icon~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
function Icon(props: PropTypes.InferProps<typeof Icon.propTypes>): ReactElement<JSX.Element> | null {
    const { path } = props;
    const ImportedIconRef = React.useRef<ImportedIconInterface>();
    const [loading, setLoading] = React.useState(false);

    useEffect((): void => {
        setLoading(true);

        const renderImage = async (imagePath) => {
            const Image = (await import(`../../../../assets/svg/${imagePath}.svg`)).ReactComponent;
            ImportedIconRef.current = await Image;
            setLoading(false);
        };

        renderImage(path);
    }, [path]);

    if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;

        // eslint-disable-next-line react/jsx-props-no-spreading
        return <ImportedIcon {...props} />;
    }

    return null;
}

/**
 * @name Icon.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} props.path - svg element path.
 * @property {string} [props.fill = 'currentColor'] - svg fill color, optional.
 * @return {Array} React propTypes
 */
Icon.propTypes = {
    path: PropTypes.string.isRequired,
    fill: PropTypes.string,
};

Icon.defaultProps = {
    fill: 'currentColor',
};

export default memo(Icon);
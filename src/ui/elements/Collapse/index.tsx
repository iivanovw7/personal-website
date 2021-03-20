/**
 * Module contains collapse component
 * @module ui/elements/Collapse
 * @author Igor Ivanov
 */
import React, { Children, ReactElement, ReactNode } from 'react';
import { config, useSpring } from 'react-spring';
import { CSSProp } from 'styled-components';

import { usePrevious, useScrollHeight } from '../../../utils/hooks';

import CollapsibleWrapper from './CollapsibleWrapper';

interface ICollapseProps {
    /** Collapse children. */
    children: ReactNode;
    /** Collapse state. */
    isOpen: boolean;
    /** Additional styles. */
    styling?: CSSProp;
}

/**
 * Creates collapse component.
 * @param {ICollapseProps} props - component props.
 * @return {ReactElement} collapse component.
 *
 */
function Collapse(props: ICollapseProps): ReactElement {
    const { isOpen, children, styling } = props;
    const [ref, height] = useScrollHeight();
    const wasOpen = usePrevious(isOpen);
    const animation = useSpring({
        to: {
            opacity: isOpen
                ? 1
                : 0,
            height: isOpen
                ? height
                : 0,
        },
        config: config.stiff,
    });
    const style = {
        ...animation,
        height: isOpen && wasOpen
            ? 'auto'
            : animation['height'], // eslint-disable-line
    };

    return (
        <CollapsibleWrapper ref={ ref } style={ style } styling={ styling }>
            { Children.toArray(children) }
        </CollapsibleWrapper>
    );
}

export default Collapse;

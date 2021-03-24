/**
 * Module contains scroll top button.
 * @module ui/components/ScrollTopButton
 * @author Igor Ivanov
 */
import React, { ReactElement, useState } from 'react';
import { Transition } from 'react-transition-group';
import { css } from 'styled-components';

import { useScrollPosition } from '../../../utils/hooks/useScrollPosition';
import { MILLISECONDS_IN_SECOND } from '../../../utils/time';
import Button from '../../elements/Button';
import Portal from '../../elements/Portal';
import { timeouts } from '../../styles/settings';

import ButtonStyles from './Styles';

/**
 * Scroll value required to be passed before `scrollTop` button shows up.
 * @type {number}
 */
const ScrollTopDisplay = -100;

/**
 * Creates ScrollTopButton component.
 * @method
 *
 * @return {Node} React component with children.
 * @constructor
 */
function ScrollTopButton(): ReactElement {
    const [visible, setVisible] = useState<boolean>(false);

    useScrollPosition({
        effect: ({ currPos }) => {
            setVisible(Boolean(currPos.y < ScrollTopDisplay));
        }
    });

    /**
     * Triggers a reflow which kick starts the animation.
     * <CSSTransition> handles this for you.
     * @param {Object} node - entering node.
     */
    function handleOnEnter(node): void {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        node?.clientHeight;
    }

    /**
     *  ScrollTop button handler.
     */
    function handleClick(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Defines opacity value depending on transition state.
     * @param {string} state - string represent current transition state.
     * @return {number} opacity value.
     */
    function opacityFromState(state: string): number {
        switch (state) {
            case 'entering':
                return 1;
            case 'entered':
                return 1;
            case 'exiting':
                return 0;
            case 'exited':
                return 0;
            default:
                return 0;
        }
    }

    return (
        <Portal id="pw-portal__scroll-top-id">
            <Transition
                in={ visible }
                appear
                timeout={ timeouts.fade }
                mountOnEnter
                unmountOnExit
                onEnter={ handleOnEnter }>
                { (state) => {
                    const Styles = css`
                        ${ButtonStyles};
                        opacity: ${opacityFromState(state)};
                        transition: ${`opacity ${timeouts.fade / MILLISECONDS_IN_SECOND}s ease`};
                    `;

                    return (
                        <Button variant="primary" styling={Styles} visible={visible} onClick={handleClick}>
                            <i className="material-icons">keyboard_arrow_up</i>
                        </Button>
                    );
                }}
            </Transition>
        </Portal>
    );
}


export default ScrollTopButton;

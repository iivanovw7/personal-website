/**
 * Module contains search field component.
 * @module ui/components/Search
 * @author Igor Ivanov
 */
import React, { memo, useState } from 'react';

import { useTextInput } from '../../../utils/hooks';
import Icon from '../../elements/Icon';
import TextInput from '../../elements/TextInput';

import Container from './Container';
import { Input, Label } from './Styles';

export interface ISearchProps {
    id: string;
    label?: string;
}

// eslint-disable-next-line
function Search(props: ISearchProps) {
    const [focused, setFocused] = useState<boolean>(false);
    const { id, label = 'Search' } = props;
    const { bind: bindSearch } = useTextInput('');

    // eslint-disable-next-line require-jsdoc
    function handleBlur() {
        setFocused(false);
    }

    // eslint-disable-next-line require-jsdoc
    function handleFocus() {
        setFocused(true);
    }

    return (
        <TextInput
            id={ id }
            label={ label }
            type="search"
            variant="primary"
            onFocus={handleFocus}
            onBlur={handleBlur}
            styling={ Input }
            stylingLabel={ Label }
            {...bindSearch}
        >
            <Container variant="primary" focused={focused}>
                <Icon path="common/search" />
            </Container>
        </TextInput>
    );
}

export default memo(Search);

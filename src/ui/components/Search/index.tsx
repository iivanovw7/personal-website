/**
 * Module contains search field component.
 * @module ui/components/Search
 * @author Igor Ivanov
 */
import React, { memo, useEffect, useState } from 'react';

import { useTextInput } from '../../../utils/hooks';
import { validateInput, VALIDATION } from '../../../utils/validation';
import Icon from '../../elements/Icon';
import TextInput from '../../elements/TextInput';

import Container from './Container';
import { Input, Label } from './Styles';

export interface ISearchProps {
    id: string;
    label?: string;
}

const debounceTimeout = 50;

// eslint-disable-next-line
function Search(props: ISearchProps) {
    const [focused, setFocused] = useState<boolean>(false);
    const [validation, setValidation] = useState<string>('');
    const { id, label = 'Search' } = props;
    const { value: search, bind: bindSearch } = useTextInput({
        initialValue: '',
        debounceTimeout,
        validation,
        onBlur: () => setFocused(false),
        onFocus: () => setFocused(true),
    });
    const validationParams = {
        key: VALIDATION.search,
        value: search,
        handler: setValidation
    };


    useEffect(() => {
        if (search && ! validateInput(validationParams)) {
            // eslint-disable-next-line no-console
            console.log(search);
        }

    }, [search]);

    return (
        <TextInput
            id={ id }
            label={ label }
            type="search"
            variant="primary"
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

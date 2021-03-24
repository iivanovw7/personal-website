/**
 * Module contains search field component.
 * @module ui/components/Search
 * @author Igor Ivanov
 */
import React, { memo, ReactElement, useEffect, useState } from 'react';
import { injectIntl, IntlShape } from 'react-intl';
import { connect } from 'react-redux';

import { VALIDATION } from '../../../config/constants';
import { getText } from '../../../locale';
import { useTextInput } from '../../../utils/hooks';
import defineValidationMessages, { validateInput } from '../../../utils/validation';
import Icon from '../../elements/Icon';
import TextInput from '../../elements/TextInput';

import Container from './Container';
import { Input, Label } from './Styles';

export interface ISearchProps {
    /** Input element `id. */
    id: string;
    /** `react-intl` object provides access  to localization methods. */
    intl: IntlShape;
    /** Search field label. */
    label?: string;
}

/** Input debounce delay. */
const debounceTimeout = 50;
/** Validation messages. */
const { [VALIDATION.search]: searchValidationMessage } = defineValidationMessages;

// eslint-disable-next-line
function Search(props: ISearchProps): ReactElement {
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

    /**
     * Renews validations text string.
     * @param {string} result - validation result.
     */
    function handleValidate(result: string | number): void {
        if (result) {
            setValidation(getText(searchValidationMessage, props, {
                // eslint-disable-next-line react/display-name
                span: (text: string) => <span>{ text }</span>,
                length: result,
            }));
        }
        else {
            setValidation('');
        }
    }

    const validationParams = {
        key: VALIDATION.search,
        value: search,
        handler: handleValidate,
    };


    useEffect(() => {
        if (search && ! validateInput(validationParams)) {
            // console.log(validation);
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
            { ...bindSearch }
        >
            <Container variant="primary" focused={ focused }>
                <Icon path="common/search" />
            </Container>
        </TextInput>
    );
}

// Not using `compose` here due to errors https://stackoverflow.com/questions/51605112/react-recompose-causing-typescript-error-on-props
export default connect(null, null)(
    injectIntl(memo(Search))
);

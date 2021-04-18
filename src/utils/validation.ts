/**
 * Module contains set of tool for validation.
 * @module utils/validation
 */

import { defineMessages as defineValidationMessages } from 'react-intl';
import validate from 'validate.js';

import { VALIDATION } from '../config/constants';

/**
 * Messages id prefix.
 * @constant {string}
 */
const messageScope = 'pw.validation';

/** Number defines minimum amount of symbols suitable for search. */
const minSearchTermLength = 4;

const { search } = VALIDATION;

/**
 * Contains messages set for react component.
 * @return {Function} defines messages set.
 */
export default defineValidationMessages({
    [search]: {
        id: `${messageScope}.${search}`,
        defaultMessage: ''
    }
});

/**
 * Contains map ov validation rules applied on every validation run.
 * @see {@link https://validatejs.org/#constraints}
 */
export const constraints = {
    [search]: {
        length: {
            minimum: minSearchTermLength,
            message: minSearchTermLength
        }
    }
};

export type TValidationParams = {
    key: VALIDATION;
    value: string;
    handler: (validation: string) => void;
};

// eslint-disable-next-line require-jsdoc
export function validateInput(params: TValidationParams): unknown {
    const { key, value, handler } = params;
    const defaultVal = '';
    const validationResult = validate({
        [key]: value
    }, constraints);

    if (validationResult) {
        const result = validationResult[key];

        handler(result
            ? result[0]
            : defaultVal
        );
    }
    else {
        handler(defaultVal);
    }

    return validationResult;
}

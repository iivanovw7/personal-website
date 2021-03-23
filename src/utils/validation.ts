import validate from 'validate.js';

const minSearchTermLength = 4;

export enum VALIDATION {
    search = 'search'
}

export const constraints = {
    [VALIDATION.search]: {
        length: {
            minimum: minSearchTermLength,
            message: {
                en: `${minSearchTermLength} characters min!`,
                ru: `минимум ${minSearchTermLength} символов!`
            }
        }
    }
};

type TValidationParams = {
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
            ? result[0].en
            : defaultVal
        );
    }
    else {
        handler(defaultVal);
    }

    return validationResult;
}

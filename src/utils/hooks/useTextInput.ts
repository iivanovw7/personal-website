import debounce from 'lodash.debounce';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

export interface IUseTextInput {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    reset: () => void;
    bind: {
        value: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
        onBlur?: () => void;
        onFocus?: () => void;
        validation?: string;
    }
}

type TUseInputParams = {
    initialValue: string;
    debounceTimeout?: number | null;
    onBlur?: () => void;
    onFocus?: () => void;
    validation?: string;
};

const useTextInput = (params: TUseInputParams): IUseTextInput => {
    const { initialValue, debounceTimeout, onBlur, onFocus, validation } = params;
    const [value, setValue] = useState<string>(initialValue);
    const debounced = (debounceTimeout && debounce(setValue, debounceTimeout)) || setValue;

    return {
        value,
        setValue: debounced,
        reset: () => setValue(''),
        bind: {
            value,
            // eslint-disable-next-line @typescript-eslint/no-shadow
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
                debounced(event.target.value);
            },
            onBlur,
            onFocus,
            validation
        }
    };
};

export default useTextInput;

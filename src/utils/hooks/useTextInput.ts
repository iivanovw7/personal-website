import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

export interface IUseTextInput {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    reset: () => void;
    bind: {
        value: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    }
}

const useTextInput = (initialValue: string): IUseTextInput => {
    const [value, setValue] = useState<string>(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            // eslint-disable-next-line @typescript-eslint/no-shadow
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value);
            }
        }
    };
};

export default useTextInput;

import React, {useState, useCallback} from 'react';

type useInputPropsType = {
    initialValue: string,
}

function useInput({initialValue}: useInputPropsType): [string, React.ChangeEventHandler<HTMLInputElement>]{
    const [inputValue, setInputValue] = useState(initialValue);

    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }, [])
        
    return [inputValue, onChangeHandler]
}

export default useInput;
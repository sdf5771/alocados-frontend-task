import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Wallet } from 'state';
import { useSetValidState } from 'hook'

type useInputPropsType = {
    initialValue: string,
    coinType: string,
    inputType: string,
}

function useInput({initialValue, coinType, inputType}: useInputPropsType): [string, (prevState: string) => void, React.ChangeEventHandler<HTMLInputElement>]{
    const [inputValue, setInputValue] = useState(initialValue);
    const [walletData, setWalletData] = useRecoilState(Wallet);
    const setValid = useSetValidState();
    
    
    const validationValue = (value: string) => {
        if(value === "") return false

        if(parseFloat(value) <= 0) return false

        return true
    }

    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let replaceVal = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
        
        setInputValue(replaceVal)

        let validationResult = validationValue(replaceVal)
        
        setValid(inputType, validationResult);
    }, [])
        
    return [inputValue, setInputValue, onChangeHandler]
}

export default useInput;
import React from 'react';
import { useRecoilState } from 'recoil';
import {FromInputIsValid, ToInputIsValid} from 'state'


function useSetValidState(){
    const [fromInputIsValid, setFromInputIsValid] = useRecoilState(FromInputIsValid);
    const [toInputIsValid, setToInputIsValid] = useRecoilState(ToInputIsValid);

    const setValid = (inputType: string, isValid: boolean) => {
        if(inputType === "FROM"){
            setFromInputIsValid(isValid);
        } else if (inputType === "TO"){
            setToInputIsValid(isValid);
        }
    }

    return setValid
}

export default useSetValidState;
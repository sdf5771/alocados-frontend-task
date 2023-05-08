import React, {useState} from 'react';
import { useRecoilState } from 'recoil';
import {FromInputIsValid, ToInputIsValid} from 'state'
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import {SwapArrow} from 'assets/images';


function ExchangeForm(){
    const [fromInputIsValid, setFromInputIsValid] = useRecoilState(FromInputIsValid);
    const [toInputIsValid, setToInputIsValid] = useRecoilState(ToInputIsValid);
    
    return(
        <Atoms.Div display="flex" flexDirection='column'>
            <Atoms.Div display="flex" flexDirection='column' alignItems='center' gap="30px">
                <Molecules.SelectCoin type="FROM" />
                <SwapArrow />
                <Molecules.SelectCoin type="TO" />
            </Atoms.Div>
            <Atoms.Button 
                marginTop="42px"
                marginBottom="35px"
                height="56px"
                borderRadius="12px" 
                backgroundColor={fromInputIsValid && toInputIsValid ? "#5D28F2" : "#E0E2E8"}
                fontFamily='Pretendard'
                fontWeight='600'
                fontSize='15px'
                lineHeight='36px'
                letterSpacing="0.05em"
                color={fromInputIsValid && toInputIsValid ? "#FFFFFF" : "#A9B0C1"}
            >환전</Atoms.Button>
        </Atoms.Div>
    )
}

export default ExchangeForm;
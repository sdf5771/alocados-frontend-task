import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import {SwapArrow} from 'assets/images';

function ExchangeForm(){
    return(
        <Atoms.Div display="flex" flexDirection='column'>
            <Atoms.Div display="flex" flexDirection='column' alignItems='center' gap="30px">
                <Molecules.SelectCoin />
                <SwapArrow />
                <Molecules.SelectCoin />
            </Atoms.Div>
            <Atoms.Button 
                marginTop="42px"
                marginBottom="35px"
                height="56px"
                borderRadius="12px" 
                backgroundColor="#5D28F2"
                fontFamily='Pretendard'
                fontWeight='600'
                fontSize='15px'
                lineHeight='36px'
                letterSpacing="0.05em"
                color='#FFFFFF'
            >환전</Atoms.Button>
        </Atoms.Div>
    )
}

export default ExchangeForm;
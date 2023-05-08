import React from 'react';
import Atoms from 'components/Atoms';
import {FilterDownArrow} from 'assets/images'

function ExchangeResultHeader(){
    return(
        <Atoms.Div 
            display='flex'
            padding="0 16px"
            width="634px"
            height="48px" 
            backgroundColor='#F4F5F8' 
            borderRadius="12px" 
            gap="32px"
            justifyContent='space-between'
            alignItems='center'
            >
            <Atoms.Div display="flex" alignItems='center' gap="4px">
                <Atoms.Span fontFamily='Poppins' fontWeight="700" fontSize="14px" lineHeight="178%">환전 시간</Atoms.Span>
                <FilterDownArrow />
            </Atoms.Div>
            <Atoms.Div>
                <Atoms.Span fontFamily='Poppins' fontWeight="400" fontSize="14px" lineHeight="178%">환전금액</Atoms.Span>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default ExchangeResultHeader;
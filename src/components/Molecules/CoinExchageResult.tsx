import React from 'react';
import Atoms from 'components/Atoms';
import {BnBLogo, EthereumLogo, SolanaLogo} from 'assets/icons';
import {RightArrow} from 'assets/images';

function CoinExchangeResult(){
    return(
        <Atoms.Div 
            display='flex'
            padding="0 16px"
            height="48px" 
            backgroundColor='#F4F5F8' 
            borderRadius="12px" 
            gap="32px"
            justifyContent='center'
            alignItems='center'
            >
            <Atoms.Div>
                <Atoms.Span 
                fontSize="14px" 
                fontWeight="400"
                lineHeight="178%"
                color='#2A3249'
                >2023-03-12, AM 10:50</Atoms.Span>
            </Atoms.Div>
            <Atoms.Div display="flex" alignItems='center' gap="32px">
                <Atoms.Div display="flex" alignItems='center' gap="8px">
                    <SolanaLogo />
                    <Atoms.CoinAmount>1,302.44 ETH</Atoms.CoinAmount>
                </Atoms.Div>
                <RightArrow />
                <Atoms.Div display="flex" alignItems='center' gap="8px">
                    <SolanaLogo />
                    <Atoms.CoinAmount>1,302.44 ETH</Atoms.CoinAmount>
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default CoinExchangeResult
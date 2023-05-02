import React from 'react';
import Atoms from 'components/Atoms';
import {SolanaLogo, BnBLogo, EthereumLogo} from 'assets/icons';
import {DATA_ETH, DATA_BNB, DATA_SOL} from 'constant';

function SelectCoin(){
    return(
        <Atoms.Div display="flex" gap="16px">
            <Atoms.Div display="flex" flexDirection='column' justifyContent='center' width="calc(472px - 28px)" height="calc(56px - 20px)" padding="10px 14px" backgroundColor='#FAFBFC' borderRadius="12px" gap="4px">
                <Atoms.Span 
                    width="100%"
                    fontFamily='Pretendard' 
                    fontWeight="600" 
                    fontSize="12px"
                    lineHeight="12px"
                    color="#546182"
                >전환 수량 (FROM)</Atoms.Span>
                <Atoms.Input 
                    width="100%" 
                    height="18px" 
                    border="0"
                    backgroundColor="inherit"
                    fontFamily='Poppins'
                    fontWeight="600"
                    fontSize="18px"
                    lineHeight="178%"
                    color="#313C57"
                />
            </Atoms.Div>
            <Atoms.Div display="flex" width="calc(147px - 32px)" height="calc(56px - 20px)" padding="10px 16px" backgroundColor='#FAFBFC' borderRadius="12px">
                
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default SelectCoin;
import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';

function ExchangeInfo(){
    return(
        <Atoms.Div display="flex" padding="24px" flexDirection='column' width="calc(308px - 48px)" height="calc(386px - 48px)" backgroundColor='#FAFBFC' borderRadius='12px'>
            <Atoms.Div marginBottom="16px">
                <Atoms.Span fontWeight="600" fontSize="20px" lineHeight="135%" letterSpacing="0.025em" color='#4C5B7A'>요약</Atoms.Span>
            </Atoms.Div>
            <Atoms.NewLine />
            <Atoms.Div marginTop="16px" display='flex' flexDirection='column' gap="28px">
                <Molecules.CoinInfo type="SOL" name="Solana" amount="1,211,023,512.34"/>
                <Molecules.CoinInfo type="ETH" name="Ethereum" amount="512.01"/>
                <Molecules.CoinInfo type="BNB" name="BnB" amount="0.35"/>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default ExchangeInfo
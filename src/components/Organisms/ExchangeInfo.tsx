import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import {DATA_ETH, DATA_BNB, DATA_SOL} from 'constant';

function ExchangeInfo(){
    return(
        <Atoms.Div display="flex" padding="24px" flexDirection='column' width="calc(308px - 48px)" height="calc(386px - 48px)" backgroundColor='#FAFBFC' borderRadius='12px'>
            <Atoms.Div marginBottom="16px">
                <Atoms.Span fontWeight="600" fontSize="20px" lineHeight="135%" letterSpacing="0.025em" color='#4C5B7A'>요약</Atoms.Span>
            </Atoms.Div>
            <Atoms.NewLine />
            <Atoms.Div marginTop="16px" display='flex' flexDirection='column' gap="28px">
                <Molecules.CoinInfo type={DATA_SOL.type} name={DATA_SOL.name} amount={DATA_SOL.amount} logoComponent={<DATA_SOL.LogoComponent />} />
                <Molecules.CoinInfo type={DATA_ETH.type} name={DATA_ETH.name} amount={DATA_ETH.amount} logoComponent={<DATA_ETH.LogoComponent />} />
                <Molecules.CoinInfo type={DATA_BNB.type} name={DATA_BNB.name} amount={DATA_BNB.amount} logoComponent={<DATA_BNB.LogoComponent />} />
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default ExchangeInfo
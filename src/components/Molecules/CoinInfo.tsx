import React from 'react';
import Atoms from 'components/Atoms';
import {BnBLogo, EthereumLogo, SolanaLogo} from 'assets/icons';
import {DATA_ETH, DATA_BNB, DATA_SOL} from 'constant';

type CoinInfoPropsType = {
    type: string;
    name: string;
    amount: string;
    logoComponent: React.ReactNode;
}

function CoinInfo({type, name, amount, logoComponent}: CoinInfoPropsType){
    return(
        <Atoms.Div display="flex" flexDirection='column' gap="1px">
            <Atoms.Div display="flex" alignItems='center' gap="4px" height="36px">
                <Atoms.Div display='flex' justifyContent='center' alignItems='center' width="36px" height="36px" borderRadius="30px" backgroundColor='rgba(42, 50, 73, 0.05)'>
                    {logoComponent}
                </Atoms.Div>
                <Atoms.CoinName>{name}</Atoms.CoinName>
            </Atoms.Div>
            <Atoms.Div height="32px">
                <Atoms.CoinAmount color='#2A3249'>{amount} {type}</Atoms.CoinAmount>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default CoinInfo
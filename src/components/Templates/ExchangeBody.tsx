import React from 'react';
import { useRecoilState } from 'recoil';
import { ExchangeResult } from 'state';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import Organisms from 'components/Organisms';

function ExchangeBody(){
    const [exchangeResult, setExchangeResult] = useRecoilState(ExchangeResult);
    
    return(
        <Atoms.Div width="100%" height="calc(100% - 120px)" display="flex" justifyContent='center' alignItems='center'>
            <Atoms.Div display="flex" flexDirection='column'>
                <Atoms.Div display="flex">
                    <Atoms.Title>환전하기</Atoms.Title>
                </Atoms.Div>
                <Atoms.Div display="flex" gap="17px">
                    <Atoms.Div>
                        <Organisms.ExchangeInfo />
                    </Atoms.Div>
                    <Atoms.Div display="flex" flexDirection='column'>
                        <Organisms.ExchangeForm />
                        {exchangeResult && exchangeResult.length !== 0 ? 
                            <Molecules.CoinExchangeResult 
                                from={exchangeResult.at(-1)?.from} 
                                to={exchangeResult.at(-1)?.to} 
                                changeDate="test" /> 
                                : null}
                    </Atoms.Div>
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default ExchangeBody;
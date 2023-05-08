import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { useRecoilState } from 'recoil';
import { ExchangeResult } from 'state'

function ExchangeResultBody(){
    const [exchangeResult, setExchangeResult] = useRecoilState(ExchangeResult)
    return(
        <Atoms.Div width="100%" height="calc(100% - 120px)" display="flex" flexDirection='column' justifyContent='center' alignItems='center'>
            <Atoms.Div display="flex" flexDirection='column'>
                <Atoms.Div display="flex">
                    <Atoms.Title>환전 내역</Atoms.Title>
                </Atoms.Div>
                <Atoms.Div display="flex" gap="17px">
                    <Molecules.ExchangeResultHeader />
                </Atoms.Div>
                <Atoms.Div>
                    {exchangeResult.length !== 0 ? exchangeResult.map((data, index) => {
                        return <Molecules.NoData />
                    }) : <Molecules.NoData />}
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default ExchangeResultBody;
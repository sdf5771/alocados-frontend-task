import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';

function ExchangeResultBody(){
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
                    <Molecules.NoData />
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default ExchangeResultBody;
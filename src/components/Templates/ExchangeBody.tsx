import React from 'react';
import Atoms from 'components/Atoms';
import Organisms from 'components/Organisms';

function ExchangeBody(){
    return(
        <Atoms.Div width="100%" height="calc(100% - 120px)" display="flex" flexDirection='column' justifyContent='center' alignItems='center'>
            <Atoms.Div display="flex">
                <Atoms.Title>환전하기</Atoms.Title>
            </Atoms.Div>
            <Atoms.Div display="flex">
                <Atoms.Div>
                    <Organisms.ExchangeInfo />
                </Atoms.Div>
                <Atoms.Div display="flex" flexDirection='column'>

                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default ExchangeBody;
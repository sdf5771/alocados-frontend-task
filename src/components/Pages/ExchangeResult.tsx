import React from 'react';
import Atoms from 'components/Atoms';
import Template from 'components/Templates';

function ExchangeResult(){
    return(
        <Atoms.Div display="flex" flexDirection='column' width="100vw" height="100vh">
            <Template.PageHeader />
            <Template.ExchangeResultBody />
        </Atoms.Div>
    )
}

export default ExchangeResult;
import React from 'react';
import Atoms from 'components/Atoms';
import Template from 'components/Templates';

function Exchange(){
    return (
        <Atoms.Div display="flex" flexDirection='column' width="100vw" height="100vh">
            <Template.PageHeader />
            <Template.ExchangeBody />
        </Atoms.Div>
    )
}

export default Exchange;
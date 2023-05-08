import React from 'react';
import Atoms from 'components/Atoms';

function NoData(){
    return(
        <Atoms.Div display="flex" justifyContent='center' alignItems='center' width="634px" height="400px">
            <Atoms.Span fontFamily='Poppins' fontWeight="400" fontSize="14px" lineHeight="178%" >표시할 데이터가 없어요.</Atoms.Span>
        </Atoms.Div>
    )
}

export default NoData;
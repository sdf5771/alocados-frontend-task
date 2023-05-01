import React from 'react';
import Atoms from 'components/Atoms';

function TogglePageBtn(){
    return(
        <Atoms.Div>
            <Atoms.Button width="90px" height="50px" borderRadius="12px">환전하기</Atoms.Button>
            <Atoms.Button width="90px" height="50px" borderRadius="12px">거래내역</Atoms.Button>
        </Atoms.Div>
    )
}

export default TogglePageBtn;
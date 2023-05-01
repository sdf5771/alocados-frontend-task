import React from 'react';
import { AlocadosLogo } from 'assets/icons';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';

function PageHeader(){
    return(
        <Atoms.Div height="120px" padding="0px 40px" display="flex" justifyContent='space-between' alignItems='center'>
            <AlocadosLogo />

            <Molecules.TogglePageBtn />
        </Atoms.Div>
    )
}

export default PageHeader;
import React, {useEffect, useState} from 'react';
import Atoms from 'components/Atoms';
import { useLocation, useNavigate } from 'react-router-dom';

function TogglePageBtn(){
    const location = useLocation();
    const navigate = useNavigate();
    const [active, setAcitve] = useState({
        0: false,
        1: false,
    });

    const exchangeBtnOnClickHandler = () => {
        navigate('/')
    }

    const resultBtnOnClickHandler = () => {
        navigate('/result')
    }

    useEffect(() => {
        if(location.pathname === '/'){
            setAcitve({
                0: true,
                1: false,
            })
        } else if(location.pathname === '/result'){
            setAcitve({
                0: false,
                1: true,
            })
        }
    }, [location.pathname])

    return(
        <Atoms.Div display="flex" gap="24px">
            <Atoms.ToggleButton onClick={exchangeBtnOnClickHandler} isActive={active['0']} width="90px" height="50px">환전하기</Atoms.ToggleButton>
            <Atoms.ToggleButton onClick={resultBtnOnClickHandler} isActive={active['1']} width="90px" height="50px">거래내역</Atoms.ToggleButton>
        </Atoms.Div>
    )
}

export default TogglePageBtn;
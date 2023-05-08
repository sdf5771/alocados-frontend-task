import React, {useState} from 'react';
import Atoms from 'components/Atoms';
import {SolanaLogo, BnBLogo, EthereumLogo} from 'assets/icons';
import {DATA_ETH, DATA_BNB, DATA_SOL} from 'constant';
import {BorderDownArrow} from 'assets/images';
import {useInput} from 'hook';

function SelectCoin(){
    const [inputValue, onChangeHandler] = useInput({initialValue: ""});
    const [visible, setVisible] = useState('none');

    const selectBoxOnClickHandler = (event: React.MouseEvent) => {
        if(visible == 'none'){
            setVisible('flex')
        } else {
            setVisible('none')
        }
    }

    const listOnClickHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        
    }

    return(
        <Atoms.Div display="flex" gap="16px">
            <Atoms.Div display="flex" flexDirection='column' justifyContent='center' width="calc(472px - 28px)" height="calc(56px - 20px)" padding="10px 14px" backgroundColor='#FAFBFC' borderRadius="12px" gap="4px">
                <Atoms.Span 
                    width="100%"
                    fontFamily='Pretendard' 
                    fontWeight="600" 
                    fontSize="12px"
                    lineHeight="12px"
                    color="#546182"
                >전환 수량 (FROM)</Atoms.Span>
                <Atoms.Input 
                    width="100%" 
                    height="18px" 
                    border="0"
                    backgroundColor="inherit"
                    fontFamily='Poppins'
                    fontWeight="600"
                    fontSize="18px"
                    lineHeight="178%"
                    color="#313C57"
                    value={inputValue}
                    onChange={onChangeHandler}
                />
            </Atoms.Div>
            <Atoms.Div 
                display="flex" 
                position="relative"
                alignItems='center' 
                width="calc(147px - 32px)" 
                height="calc(56px - 20px)" 
                padding="10px 16px"
                backgroundColor='#FAFBFC'
                borderRadius="12px"
                onClick={selectBoxOnClickHandler}
                >

                <Atoms.Div display="flex" width="100%" justifyContent='space-between' alignItems='center'>
                    <Atoms.Div display="flex" alignItems='center' gap="7px">
                        <DATA_ETH.LogoComponent />
                        <Atoms.Label>{DATA_ETH.name}</Atoms.Label>
                    </Atoms.Div>
                    <BorderDownArrow />
                </Atoms.Div>

                <Atoms.Ul 
                    zIndex="10"
                    display={visible} 
                    flexDirection='column' 
                    justifyContent='center'
                    position="absolute"
                    width="calc(113px)"
                    border="1px solid #eaeaea"
                    padding="10px 16px" 
                    left="0"
                    top="60px" 
                    margin="0" 
                    gap="10px"
                    borderRadius="4px"
                    backgroundColor='#FAFBFC'
                    >
                    <Atoms.Li 
                        display='flex' 
                        cursor="pointer" 
                        justifyContent='center' 
                        alignItems='center' 
                        gap="7px" 
                        border="1px solid #eaeaea" 
                        borderRadius="4px" 
                        padding="5px 10px"
                        onClick={listOnClickHandler}
                        data-coin-name={DATA_SOL.name}
                        >
                            <DATA_SOL.LogoComponent /> {DATA_SOL.name}
                    </Atoms.Li>
                    <Atoms.Li 
                        display='flex' 
                        cursor="pointer" 
                        justifyContent='center' 
                        alignItems='center' 
                        gap="7px" 
                        border="1px solid #eaeaea" 
                        borderRadius="4px" 
                        padding="5px 10px"
                        onClick={listOnClickHandler}
                        data-coin-name={DATA_ETH.name}
                        >
                            <DATA_ETH.LogoComponent /> {DATA_ETH.name}
                    </Atoms.Li>
                    <Atoms.Li 
                        display='flex' 
                        cursor="pointer" 
                        justifyContent='center' 
                        alignItems='center' 
                        gap="7px" 
                        border="1px solid #eaeaea" 
                        borderRadius="4px" 
                        padding="5px 10px"
                        onClick={listOnClickHandler}
                        data-coin-name={DATA_BNB.name}
                        >
                            <DATA_BNB.LogoComponent /> {DATA_BNB.name}
                    </Atoms.Li>
                </Atoms.Ul>

            </Atoms.Div>
        </Atoms.Div>
    )
}

export default SelectCoin;
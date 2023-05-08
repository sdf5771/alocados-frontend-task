import React, { useState } from 'react'
import Atoms from 'components/Atoms';
import {SolanaLogo, BnBLogo, EthereumLogo} from 'assets/icons';
import {DATA_ETH, DATA_BNB, DATA_SOL} from 'constant';
import {BorderDownArrow} from 'assets/images';
import {useInput, useSetValidState} from 'hook';

type TSelectCoin = {
    type: "FROM" | "TO",
}

function SelectCoin({ type } : TSelectCoin){
    const [thisCoin, setThisCoin] = useState(DATA_ETH);
    const [inputValue, setInputValue, onChangeHandler] = useInput({initialValue: "", coinType: thisCoin.type, inputType: type});
    const [visible, setVisible] = useState('none');
    const setValid = useSetValidState();

    const selectBoxOnClickHandler = (event: React.MouseEvent) => {
        if(visible === 'none'){
            setVisible('flex')
        } else {
            setVisible('none')
        }
    }

    const listOnClickHandler = (event: React.MouseEvent) => {
        event.preventDefault();

        if(!(event.target instanceof HTMLLIElement)){
            return
        }

        if(event.target.dataset['coinName'] === 'Ethereum'){
            setThisCoin(DATA_ETH);
            setInputValue('')
            
        } else if(event.target.dataset['coinName'] === 'Solana'){
            setThisCoin(DATA_SOL);
            setInputValue('')
        } else if(event.target.dataset['coinName'] === 'BnB'){
            setThisCoin(DATA_BNB);
            setInputValue('')
        }
        
        setValid(type, false);
    }

    return(
        <Atoms.Div display="flex" gap="16px">
            <Atoms.Div 
                display="flex" 
                border={inputValue === "0" ? "1px solid red" : ""} 
                flexDirection='column' 
                justifyContent='center' 
                width={inputValue === "0" ? "calc(472px - 30px)" : "calc(472px - 28px)"} 
                height={inputValue === "0" ? "calc(56px - 22px)" : "calc(56px - 20px)"} 
                padding="10px 14px" 
                backgroundColor='#FAFBFC' 
                borderRadius="12px" 
                gap="4px">
                <Atoms.Span 
                    width="100%"
                    fontFamily='Pretendard' 
                    fontWeight="600" 
                    fontSize="12px"
                    lineHeight="12px"
                    color="#546182"
                >전환 수량 ({type})</Atoms.Span>
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
                    placeholder='0'
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
                        <thisCoin.LogoComponent />
                        <Atoms.Label>{thisCoin.name}</Atoms.Label>
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
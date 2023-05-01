import styled, { CSSProperties } from "styled-components";

const CoinAmount = styled.p<CSSProperties>`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 18px;
    line-height: 178%;
    margin: 0;
    text-align: ${({textAlign}) => textAlign};
    font-feature-settings: 'pnum' on, 'lnum' on, 'cv03' on, 'cv04' on, 'cv09' on;

    color: ${({color}) => color || '#404E71'};
`

export default CoinAmount;
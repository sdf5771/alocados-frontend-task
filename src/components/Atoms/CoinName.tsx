import styled, { CSSProperties } from "styled-components";

const CoinName = styled.p<CSSProperties>`
    font-family: 'Poppins';
    font-weight: 400;
    margin: 0;
    font-size: ${({fontSize}) => fontSize || '18px'};
    line-height: 178%;
    font-feature-settings: 'pnum' on, 'lnum' on, 'cv03' on, 'cv04' on, 'cv09' on;
    color: ${({color}) => color || '#4C5B7A'};
`

export default CoinName;
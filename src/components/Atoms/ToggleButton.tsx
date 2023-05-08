import styled from 'styled-components';

const ToggleButton = styled.button<React.CSSProperties & {
    isActive? : boolean,
}
>`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    font-family: 'Pretendard';
    font-size: 15px;
    line-height: 36px;
    letter-spacing: 0.05em;
    font-weight: ${({isActive}) => isActive ? "" : "600"};
    color: ${({isActive}) => isActive ? "#5D28F2" : "#404E71"};
    background-color: ${({isActive}) => isActive ? "rgba(93, 40, 242, 0.12)" : "inherit"};
    border-radius: 12px;
    border: 0;
    transition: 0.3s ease;

    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    :focus {
        outline: 0;
        -webkit-appearance: none;
    }
    :hover{
        background-color: rgba(93, 40, 242, 0.12);
        color: #5D28F2;
    }
`

export default ToggleButton;
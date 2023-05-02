import styled from 'styled-components';

const Input = styled.input<React.CSSProperties & {
    placeholderColor?: string;
} 
>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    line-height: ${({ lineHeight }) => lineHeight};
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    border: ${({ border }) => border};
    box-sizing: border-box;
    border-radius: ${({ borderRadius }) => borderRadius};
    background-color: ${({backgroundColor}) => backgroundColor};
    font-size: ${({ fontSize }) => fontSize || '16px'};

    :focus {
        outline: none;
    }
    ::placeholder {
        color: ${({placeholderColor}) => placeholderColor};
    }
`

export default Input;
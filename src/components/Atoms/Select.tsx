import styled, { CSSProperties } from 'styled-components';

export default styled.select<CSSProperties>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  line-height: ${({ lineHeight }) => lineHeight};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({backgroundColor}) => backgroundColor};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  visibility: ${({visibility}) => visibility};

  :focus {
    outline: none;
  }
`;
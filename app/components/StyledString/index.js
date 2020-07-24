import styled from 'styled-components';

// Styled paragraph for the strings from the server.
// The first string has a different colored background.
const StyledString = styled.p`
  color: black;
  font-size: 1.2rem;
  font-family: sans-serif;
  background-color: ${props => (props.idx === 0 ? 'skyblue' : 'palevioletred')};
  color: white;
  padding: 0.8rem;
  border-radius 4px;
  font-weight: 300;
`;

export default StyledString;

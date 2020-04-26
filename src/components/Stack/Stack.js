import styled from 'styled-components';

const Stack = styled.div`
  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default Stack;
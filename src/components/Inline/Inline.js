import styled from 'styled-components';

const Inline = styled.div`
  > *:not(:last-child) {
    margin-right: 8px;
  }
`;

export default Inline;
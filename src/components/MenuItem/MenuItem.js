import styled from 'styled-components';

const MenuItem = styled.li`
  display: inline-flex;
  ${({ fullWidth }) => fullWidth ? 'width: 100%;' : ''}
  ${({ fullWidth }) => fullWidth ? 'justify-content: center;' : ''}
`;

export default MenuItem;
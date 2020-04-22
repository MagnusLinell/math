import styled from 'styled-components';

const MenuItem = styled.li`
  display: inline-flex;
  ${({ fullWidth}) => fullWidth ? 'width: 100%;' : ''}
`;

export default MenuItem;
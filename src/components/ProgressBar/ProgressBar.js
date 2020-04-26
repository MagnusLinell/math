import styled from 'styled-components';

const StyledProgressBar = styled.div`
  display: flex;
  height: 1rem;
  font-size: .75rem;
  width: 90%;
  background-color: #e9ecef;
  border-radius: .25rem;
  &:after {
    content: '';
    width: ${({progress}) => parseInt(progress * 100)}%;
    height: 16px;
    background-color: #2ecc71;
  }
`;

export default StyledProgressBar;

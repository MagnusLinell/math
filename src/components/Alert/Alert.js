import styled from 'styled-components';

const getBackgroundColor = (level) => {
  switch (level) {
    case 'success':
      return '#2ecc71';
    case 'failed':
      return '#e74c3c';
    default:
      return '#3498db';
  }
}

const getColor = (level) => {
  switch (level) {
    case 'success':
      return '#2c3e50';
    case 'failed':
      return '#ecf0f1';
    default:
      return '#3498db';
  }
}

const Alert = styled.div`
  background-color: ${({ level }) => getBackgroundColor(level)};
  color:  ${({ level }) => getColor(level)};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Alert;
import styled from 'styled-components';

const getBackgroundColor = (variant) => {
  switch (variant) {
    case 'primary':
      return '#3498db';
    case 'secondary':
    default:
      return '#c0392b';
  }
}

const getColor = (variant) => {
  switch (variant) {
    case 'primary':
      return 'white';
    case 'secondary':
    default:
      return '#2c3e50';
  }
}

const Button = styled.button`
  background-color: ${({ variant }) => getBackgroundColor(variant)};
  color: ${({ variant }) => getColor(variant)};
  border: 1px solid white;
  border-radius: .25rem;
  padding: 8px;
  font-size: 16px;
`;

export default Button;
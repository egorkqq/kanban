import styled from "styled-components";

// const CardComponent: React.FC = ({ children }) => {
//   return <CardWrapper>{children}</CardWrapper>;
// };

const CardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(9, 45, 66, 0.25);
  border-radius: 3px;
  font-family: ${props => props.theme.fontFamily};
  line-height: ${props => props.theme.typography.lineHeight};
  font-size: ${props => props.theme.typography.fontSize};
  color: ${props => props.theme.colors.main};
  padding: 8px 12px;
  margin-bottom: 8px;
`;

export const Card = CardWrapper;

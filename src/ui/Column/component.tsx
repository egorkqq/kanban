import styled from "styled-components";

// const ColumnComponent: React.FC = ({children}) => {
//   return <div></div>;
// };

export const Column = styled.section`
  background: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 272px;
  flex-basis: 22%;
  padding: 8px 12px 0;
  margin-right: 12px;
`;

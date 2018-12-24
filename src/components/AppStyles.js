import styled from 'styled-components';

export const PageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row-reverse;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-grow: 1;
  min-width: 100vh;
`;

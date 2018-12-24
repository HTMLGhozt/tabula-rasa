import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  from {
    max-width: 100%;
  }
  to {
    max-width: 0%;
  }
`;

// todo: abstract background-color to theme color
export const NotificationContainer = styled.div`
  background-color: #42c5f4;
  padding: 10px 25px 12px;
  border-radius: 5px 10px;
  position: absolute;
  overflow: hidden;
  top: 45px;
  right: 35px;
  background-image: radial-gradient(at top left, #42c5f4, #4286f4);
`;

export const NotificationText = styled.span`
  font-size: 16px;
  color: white;
`;

// todo: abstract background-color to theme color
export const LoadingBar = styled.span`
  background-color: #85acea;
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
  animation: ${loadingAnimation} ${props => props.loadingAnimationLength / 1000}s ease-in;
`;

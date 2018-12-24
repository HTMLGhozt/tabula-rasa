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
  padding: 5px 12px 15px;
  border-radius: 10px;
  position: absolute;
  overflow: hidden;
  top: 45px;
  right: 35px;
`;

export const NotificationText = styled.span`
  font-size: 14px;
  color: white;
`;

// todo: abstract background-color to theme color
export const LoadingBar = styled.span`
  background-color: #4286f4;
  position: absolute;
  width: 100%;
  height: 7px;
  bottom: 0;
  left: 0;
  ${''/* The two seconds in animation length makes it seem more accurate in lieu of the border-radius */}
  animation: ${loadingAnimation} ${props => (props.loadingAnimationLength / 1000) + 2}s ease;
`;
